import { useState, useEffect, useReducer } from "react";
import Accordian from "../Accordian";
import Assessments from "../Assessments";
import Vitals from "../Vitals";
import NarrativeBlurb from "../NarrativeBlurb";
import MultiSelectInput from "../MultiSelectInput";
import SelectInput from "../SelectInput";
import changeNavBold from "../../utils/changeNavBold";
import postData from "../../utils/postRequest";
import constants from "../../utils/constants";

const defaultFormState = {
    patient: "",
    education: [],
    instruction: [],
    intervention: [],
    fim: "",
    care: "",
    verbal_cueing: "",
    gross_motor_coordination: "",
    fine_motor_coordination: "",
    dynamic_sitting_balance: "",
    static_sitting_balance: "",
    blood_pressure: "",
    heart_rate: "",
    respiration_rate: "",
    temperature: "",
    saturation: "",
};

const formReducer = (state, event) => {
    if (event.reset) {
        return defaultFormState;
    }
    return {
        ...state,
        [event.name]: event.value,
    };
};

export default function ToiletTransfer() {
    const [formData, setFormData] = useReducer(formReducer, defaultFormState);
    const [blurb, setBlurb] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        postData("/toilet-transfer", formData).then((data) => {
            setBlurb(data);
        });
    };

    const handleSingleSelectChange = (event) => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    };

    const handleMultiSelectChange = (e) => {
        // make array of multi selected options
        const selected = document.getElementById(e.target.id).selectedOptions;
        let selectedArray = [];
        for (let element of selected) {
            selectedArray.push(element.value);
        }
        // update form element state with new array values
        setFormData({
            name: e.target.name,
            value: selectedArray,
        });
    };

    useEffect(() => {
        changeNavBold("nav-toilet-transfer");

        // make sure collapsed content is shown if browser refreshed
        const collapsed = document.getElementById(
            "component-collapse-mobility"
        );
        collapsed.classList.add("show");
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                {/* Patient terminology */}
                <SelectInput
                    label="Healthcare Receiver Terminology"
                    id="patient"
                    name="patient"
                    handleChange={handleSingleSelectChange}
                    options={constants.patientTerm}
                />
                <MultiSelectInput
                    label="Pre-Activity Education Topics"
                    id="education"
                    name="education"
                    handleChange={handleMultiSelectChange}
                    options={constants.functionalActivityEducationTopics}
                />
                <MultiSelectInput
                    label="Activity-Specific Instructions"
                    id="instruction"
                    name="instruction"
                    handleChange={handleMultiSelectChange}
                    options={constants.toiletTransfer.instruction}
                />
                <MultiSelectInput
                    label="Activity-Specific Interventions"
                    id="intervention"
                    name="intervention"
                    handleChange={handleMultiSelectChange}
                    options={constants.toiletTransfer.intervention}
                />
                <Accordian
                    categories={[
                        {
                            component: (
                                <Assessments
                                    handleChange={handleSingleSelectChange}
                                />
                            ),
                            label: "Assessments",
                        },
                        {
                            component: (
                                <Vitals
                                    handleChange={handleSingleSelectChange}
                                />
                            ),
                            label: "Vitals",
                        },
                    ]}
                />
                <button type="submit">Submit</button>
                <NarrativeBlurb text={blurb} id="blurb" />
            </form>
        </>
    );
}

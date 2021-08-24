import { useState, useReducer, useEffect } from "react";
import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import SubmitButton from "../SubmitButton";
import NarrativeBlurb from "../NarrativeBlurb";
import Accordian from "../Accordian";
import Assessments from "../Assessments";
import Vitals from "../Vitals";
import constants from "../../utils/constants";
import postData from "../../utils/postRequest";
import changeNavBold from "../../utils/changeNavBold";

const defaultFormState = {
    patient: "",
    extremity: "",
    education: [],
    instruction: [],
    interventions: [],
    fim: "",
    care: "",
    dynamic_sitting_balance: "",
    static_sitting_balance: "",
    gross_motor_coordination: "",
    fine_motor_coordination: "",
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

export default function HemiDressing() {
    const [formData, setFormData] = useReducer(formReducer, defaultFormState);
    const [blurb, setBlurb] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        postData("/hemi-dressing", formData).then((data) => {
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
        changeNavBold("nav-hemi-dressing");

        // make sure collapsed content is shown if browser refreshed
        const collapsed = document.getElementById("component-collapse-adl");
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
                <SelectInput
                    label="Affected/Involved Extremity"
                    id="extremity"
                    name="extremity"
                    handleChange={handleSingleSelectChange}
                    options={constants.extremities}
                />
                <MultiSelectInput
                    label="Pre-Activity Education Topics"
                    id="education"
                    name="education"
                    handleChange={handleMultiSelectChange}
                    options={constants.functionalActivityEducationTopics}
                />
                <MultiSelectInput
                    label="Activity-Specific Instruction Topics"
                    id="instruction"
                    name="instruction"
                    handleChange={handleMultiSelectChange}
                    options={constants.upperBodyDressingVerbalCues}
                />

                <MultiSelectInput
                    label="Activity-Specific Intervention Strategies"
                    id="interventions"
                    name="interventions"
                    handleChange={handleMultiSelectChange}
                    options={constants.interventionsUBDressing}
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
                <SubmitButton />
            </form>

            <NarrativeBlurb text={blurb} id="blurb" />
        </>
    );
}

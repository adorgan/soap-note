import { useState, useReducer } from "react";
import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import SubmitButton from "../SubmitButton";
import NarrativeBlurb from "../NarrativeBlurb";
// import Vitals from "../Vitals";
import constants from "../../utils/constants";
import postData from "../../utils/postRequest";

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
                <SelectInput
                    label="FIM Score"
                    id="fim"
                    name="fim"
                    handleChange={handleSingleSelectChange}
                    options={constants.fim}
                />
                <SelectInput
                    label="CARE tool"
                    id="care"
                    name="care"
                    handleChange={handleSingleSelectChange}
                    options={constants.care}
                />
                <SelectInput
                    label="Dynamic Sitting Balance"
                    id="dynamic_sitting_balance"
                    name="dynamic_sitting_balance"
                    handleChange={handleSingleSelectChange}
                    options={constants.sittingBalance}
                />
                <SelectInput
                    label="Static Sitting Balance"
                    id="static_sitting_balance"
                    name="static_sitting_balance"
                    handleChange={handleSingleSelectChange}
                    options={constants.sittingBalance}
                />
                <SubmitButton />
            </form>

            <NarrativeBlurb text={blurb} id="blurb"/>
        </>
    );
}

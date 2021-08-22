import { useState, useReducer } from "react";
import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import SubmitButton from "../SubmitButton";
import NarrativeBlurb from "../NarrativeBlurb";
import Vitals from "../Vitals";
import constants from "../../utils/constants";
import postData from "../../utils/postRequest";

const defaultFormState = {
    patient: "",
    position: "",
    location: "",
    grooming_tasks: [],
    education: [],
    instruction: [],
    interventions: [],
    fim: "",
    care: "",
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

export default function Grooming() {
    const [formData, setFormData] = useReducer(formReducer, defaultFormState);
    const [blurb, setBlurb] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        postData("/grooming", formData).then((data) => {
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
                    label="Completed in Sitting or Standing"
                    id="position"
                    name="position"
                    handleChange={handleSingleSelectChange}
                    options={constants.position}
                />
                <SelectInput
                    label="Location completed"
                    id="location"
                    name="location"
                    handleChange={handleSingleSelectChange}
                    options={constants.location}
                />
                <MultiSelectInput
                    label="Grooming Tasks Completed"
                    id="grooming_tasks"
                    name="grooming_tasks"
                    handleChange={handleMultiSelectChange}
                    options={constants.groomingTasks}
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
                    options={constants.groomingVerbalCues}
                />

                <MultiSelectInput
                    label="Activity-Specific Intervention Strategies"
                    id="interventions"
                    name="interventions"
                    handleChange={handleMultiSelectChange}
                    options={constants.interventionsGrooming}
                />

                <div className="accordion " id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button collapsed shadow-none"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                Assessments
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingOne"
                        >
                            <div className="accordion-body">
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
                                    label="Gross Motor Coordination"
                                    id="gross_motor_coordination"
                                    name="gross_motor_coordination"
                                    handleChange={handleSingleSelectChange}
                                    options={constants.coordination}
                                />
                                <SelectInput
                                    label="Fine Motor Coordination"
                                    id="fine_motor_coordination"
                                    name="fine_motor_coordination"
                                    handleChange={handleSingleSelectChange}
                                    options={constants.coordination}
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
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Vitals
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                        >
                            <div className="accordion-body">
                                <Vitals
                                    handleChange={handleSingleSelectChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <SubmitButton />
            </form>

            <NarrativeBlurb text={blurb} id="blurb" />
        </>
    );
}

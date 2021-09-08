import React, { useState, useReducer, useEffect } from "react";
import NumberInput from "../NumberInput";
import Vitals from "../Vitals";
import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import NarrativeBlurb from "../NarrativeBlurb";
import Accordian from "../Accordian";
import Assessments from "../Assessments";
import SubmitButton from "../SubmitButton";
import FimBloc from "../FimBloc";
import postData from "../../utils/postRequest";
import getData from "../../utils/getRequest";
import constants from "../../utils/constants";
import changeNavBold from "../../utils/changeNavBold";


const defaultState = {
    patient: "resident",
    name: "",
    goals: [],
    impairments: [],
    level: "",
    time: "",
    plan: "",
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
        return defaultState;
    }
    return {
        ...state,
        [event.name]: event.value,
    };
};

// Component
function ArmBike() {
    const [impairments, setImpairments] = useState([]);
    const [formData, setFormData] = useReducer(formReducer, defaultState);
    // const [showGoalBlurb, setShowGoalBlurb] = useState(false);
    const [blurb, setBlurb] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        postData("/arm-bike", formData).then((data) => {
            // setShowGoalBlurb(true);
            // document.getElementById("goal_blurb").innerHTML = data;
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
        getData("/get-impairments").then((data) => setImpairments(data));
    }, []);

    useEffect(() => {
        changeNavBold("nav-arm-bike");

        // make sure collapsed content is shown if browser refreshed
        const collapsed = document.getElementById("component-collapse-ther-ex");
        collapsed.classList.add("show");
    }, []);

    return (
        <>
            <div className="wrapper">
                <h1>Arm Bike</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        {/* Patient terminology */}
                        <SelectInput
                            label="Healthcare Receiver Terminology"
                            id="patient"
                            name="patient"
                            handleChange={handleSingleSelectChange}
                            options={constants.patientTerm}
                        />
                        {/* Arm bike name */}
                        <SelectInput
                            label="Arm Bike Name"
                            id="name"
                            name="name"
                            handleChange={handleSingleSelectChange}
                            options={constants.armBikeNames}
                        />
                        {/* Goals */}
                        <MultiSelectInput
                            label="Goals Targeted"
                            name="goals"
                            id="goals"
                            handleChange={handleMultiSelectChange}
                            options={constants.goals}
                        />
                        {/* Physical Impairments */}
                        <MultiSelectInput
                            label="Impairments Addressed"
                            name="impairments"
                            id="impairments"
                            handleChange={handleMultiSelectChange}
                            options={impairments}
                        />
                        {/* Time on activity */}
                        <NumberInput
                            name="time"
                            id="time"
                            label="Time"
                            min="0"
                            max="15"
                            handleChange={handleSingleSelectChange}
                        />
                        {/* Activity resistance level */}
                        <NumberInput
                            name="level"
                            id="level"
                            label="Level"
                            min="0"
                            max="10"
                            handleChange={handleSingleSelectChange}
                        />
                        <SelectInput
                            label="Plan"
                            name="plan"
                            id="plan"
                            handleChange={handleSingleSelectChange}
                            options={constants.plan}
                        />
                        <Accordian
                            categories={[
                                {
                                    component: (
                                        <FimBloc
                                            handleChange={
                                                handleSingleSelectChange
                                            }
                                        />
                                    ),
                                    label: "FIM",
                                },
                                {
                                    component: (
                                        <Assessments
                                            handleChange={
                                                handleSingleSelectChange
                                            }
                                        />
                                    ),
                                    label: "Assessments",
                                },
                                {
                                    component: (
                                        <Vitals
                                            handleChange={
                                                handleSingleSelectChange
                                            }
                                        />
                                    ),
                                    label: "Vitals",
                                },
                            ]}
                        />
                    </fieldset>
                    <SubmitButton />
                </form>

                <NarrativeBlurb text={blurb} id="goal_blurb" />
            </div>
        </>
    );
}

export default ArmBike;

import React, { useState, useReducer, useEffect } from "react";
import NumberInput from "../NumberInput";
import Vitals from "../Vitals";
import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import NarrativeBlurb from "../NarrativeBlurb";
import SubmitButton from "../SubmitButton";
import postData from "../../utils/postRequest";
import getData from "../../utils/getRequest";
import constants from "../../utils/constants";

const defaultState = {
    patient: "resident",
    goals: [],
    impairments: [],
    arm_bike_level: "",
    arm_bike_time: "",
    fim_arm_bike: "",
    verbal_cueing: "",
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

    const handleGoalChange = (event) => {
        // parse selected goals in dropdown and add to array
        var selectedGoals = document.getElementById("goals").selectedOptions;
        var goalsArray = [];
        for (let goal of selectedGoals) {
            goalsArray.push(goal.value);
        }

        //update form state with new array
        setFormData({
            name: event.target.name,
            value: goalsArray,
        });
    };

    const handleImpairmentsChange = (event) => {
        // parse selected impairments in dropdown and add to array
        var selectedImpairments =
            document.getElementById("impairments").selectedOptions;
        var impairmentsArray = [];
        for (let impairment of selectedImpairments) {
            impairmentsArray.push(impairment.value);
        }

        //update form state with new array
        setFormData({
            name: event.target.name,
            value: impairmentsArray,
        });
    };

    const handleChange = (event) => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    };


    useEffect(() => {
        getData("/get-impairments").then((data) => setImpairments(data));
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
                            handleChange={handleChange}
                            options={["resident", "client", "patient"]}
                        />
                        {/* Arm bike name */}
                        <SelectInput
                            label="Arm Bike Name"
                            id="arm_bike_name"
                            name="arm_bike_name"
                            handleChange={handleChange}
                            options={constants.armBikeNames}
                        />
                        {/* Goals */}
                        <MultiSelectInput
                            label="Goals Targeted"
                            name="goals"
                            id="goals"
                            handleChange={handleGoalChange}
                            options={constants.goals}
                        />
                        {/* Physical Impairments */}
                        <MultiSelectInput
                            label="Impairments Addressed"
                            name="impairments"
                            id="impairments"
                            handleChange={handleImpairmentsChange}
                            options={impairments}
                        />
                        {/* Time on activity */}
                        <NumberInput
                            name="arm_bike_time"
                            id="arm_bike_time"
                            label="Time"
                            min="0"
                            max="15"
                            handleChange={handleChange}
                        />
                        {/* Activity resistance level */}
                        <NumberInput
                            name="arm_bike_level"
                            id="arm_bike_level"
                            label="Level"
                            min="0"
                            max="10"
                            handleChange={handleChange}
                        />
                        {/* FIM scores */}
                        <SelectInput
                            label="FIM Score"
                            name="fim_arm_bike"
                            id="fim_arm_bike"
                            handleChange={handleChange}
                            options={constants.fim}
                        />
                        <SelectInput
                            label="Verbal Cueing Required"
                            name="verbal_cueing"
                            id="verbal_cueing"
                            handleChange={handleChange}
                            options={constants.verbalCues}
                        />
                        <SelectInput
                            label="Plan"
                            name="plan"
                            id="plan"
                            handleChange={handleChange}
                            options={constants.plan}
                        />
                    </fieldset>
                    <SubmitButton />
                </form>

                <NarrativeBlurb text={blurb} id="goal_blurb" />
            </div>
            <div className="right-sidebar">
                <Vitals />
            </div>
        </>
    );
}

export default ArmBike;

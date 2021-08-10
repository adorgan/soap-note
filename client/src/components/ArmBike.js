import React, { useState, useReducer } from "react";
import Goals from "./Goals";
import NumberInput from "./NumberInput";
import FimScore from "./FimScore";
import Impairments from "./Impairments";
import Vitals from "./Vitals";
import VerbalCues from "./VerbalCues";
import Patient from "./Patient";

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

const goals = [
    "feeding",
    "grooming",
    "upper body dressing",
    "lower body dressing",
    "toileting",
    "toilet transfers",
    "tub transfers",
];

const impairments = [
    "fine motor coordination",
    "gross motor coordination",
    "BUE strength",
    "dynamic sitting balance",
    "static standing balance",
    "proprioception",
    "safety awareness",
];

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
    const [formData, setFormData] = useReducer(formReducer, defaultState);
    const [showGoalBlurb, setShowGoalBlurb] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        postData("/arm-bike", formData).then((data) => {
            setShowGoalBlurb(true);
            document.getElementById("goal_blurb").innerHTML = data;
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

    return (
        <>
            <div className="wrapper">
                <h1>Arm Bike</h1>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <Patient
                            id="patient"
                            name="patient"
                            handleChange={handleChange}
                        />
                        <Goals
                            label="Goals Targeted"
                            name="goals"
                            id="goals"
                            handleChange={handleGoalChange}
                            value={formData.goals}
                            goals={goals}
                            size={goals.length}
                        />
                        <Impairments
                            label="Impairments Addressed"
                            name="impairments"
                            id="impairments"
                            handleChange={handleImpairmentsChange}
                            value={formData.impairments}
                            impairments={impairments}
                            size={impairments.length}
                        />
                        <NumberInput
                            name="arm_bike_time"
                            id="arm_bike_time"
                            label="Time"
                            min="0"
                            max="15"
                            handleChange={handleChange}
                        />
                        <NumberInput
                            name="arm_bike_level"
                            id="arm_bike_level"
                            label="Level"
                            min="0"
                            max="10"
                            handleChange={handleChange}
                        />
                        <FimScore
                            label="Physical Assistance Required"
                            name="fim_arm_bike"
                            id="fim_arm_bike"
                            handleChange={handleChange}
                            value={formData.fim_arm_bike}
                        />
                        <VerbalCues
                            label="Verbal Cueing Required"
                            name="verbal_cueing"
                            id="verbal_cueing"
                            handleChange={handleChange}
                        />
                    </fieldset>
                    <div className="div-submit-btn">
                        <button className="btn-form" type="submit">
                            Submit
                        </button>
                    </div>
                </form>

                {showGoalBlurb && (
                    <div className="narrative_blurb"contentEditable="true" id="goal_blurb"></div>
                )}
            </div>
            <div className="right-sidebar">
                <Vitals />
            </div>
        </>
    );
}

export default ArmBike;

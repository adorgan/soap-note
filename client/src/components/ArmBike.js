import React, { useState, useReducer, useEffect } from "react";
import Goals from "./Goals";
import NumberInput from "./NumberInput";

const defaultState = {
  goals: [],
  arm_bike_level: "",
  arm_bike_time: "",
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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <>
      <h1>Arm Bike</h1>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <Goals
            name="goals"
            id="goals"
            handleChange={handleGoalChange}
            value={formData.goals}
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
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default ArmBike;

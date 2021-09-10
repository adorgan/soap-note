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

const toggleVerbalCues = (setVerbalCues) => {
  const verbalCueingRequired = document.getElementById("verbal_cueing");
  const verbalCuesGiven = document.getElementById("verbal_cues_given");

  if (verbalCueingRequired.value === "no verbal cueing") {
    // disable verbal cues given multi select and reset form value
    verbalCuesGiven.disabled = true;
    verbalCuesGiven.value = "";
    setVerbalCues({
      name: "verbal_cues_given",
      value: "",
    });
  } else {
    // re-enable multi-select
    verbalCuesGiven.disabled = false;
  }
};

const defaultState = {
  patient: "resident",
  name: "",
  position: "",
  goals: [],
  impairments: [],
  level: "",
  time: "",
  physical_assistance: "",
  verbal_cueing: "",
  verbal_cues_given: [],
  plan: "",
  eating: "",
  grooming: "",
  upper_body_dressing: "",
  lower_body_dressing: "",
  toileting: "",
  toilet_transfers: "",
  tub_transfers: "",
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
    toggleVerbalCues(setFormData);
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
              isRequired={true}
            />
            {/* Arm bike name */}
            <SelectInput
              label="Arm Bike Name"
              id="name"
              name="name"
              handleChange={handleSingleSelectChange}
              options={constants.armBikeNames}
              isRequired={true}
            />
            <SelectInput
              label="Patient Position"
              id="position"
              name="position"
              handleChange={handleSingleSelectChange}
              options={constants.position_exercise}
              isRequired={true}
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
            <MultiSelectInput
              label="Pre-Activity Education Topics"
              id="education"
              name="education"
              handleChange={handleMultiSelectChange}
              options={constants.functionalActivityEducationTopics}
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
              label="Physical Assistance Provided"
              id="physical_assistance"
              name="physical_assistance"
              handleChange={handleSingleSelectChange}
              options={constants.assessments.fim}
              isRequired={true}
            />
            <SelectInput
              label="Verbal Cueing Required"
              name="verbal_cueing"
              id="verbal_cueing"
              handleChange={handleSingleSelectChange}
              options={constants.assessments.verbalCues}
              isRequired={true}
            />
            <MultiSelectInput
              label="Verbal Cues Given"
              name="verbal_cues_given"
              id="verbal_cues_given"
              handleChange={handleMultiSelectChange}
              options={constants.armBike.verbalCues}
            />
            <SelectInput
              label="Plan"
              name="plan"
              id="plan"
              handleChange={handleSingleSelectChange}
              options={constants.plan}
              isRequired={true}
            />
            <Accordian
              categories={[
                {
                  component: (
                    <FimBloc handleChange={handleSingleSelectChange} />
                  ),
                  label: "FIM",
                },
                {
                  component: (
                    <Assessments handleChange={handleSingleSelectChange} />
                  ),
                  label: "Misc. Assessments",
                },
                {
                  component: <Vitals handleChange={handleSingleSelectChange} />,
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

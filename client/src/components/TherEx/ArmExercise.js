import { useState, useEffect, useReducer } from "react";
import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import NumberInput from "../NumberInput";
import SubmitButton from "../SubmitButton";
import NarrativeBlurb from "../NarrativeBlurb";
import Vitals from "../Vitals";
import FimBloc from "../FimBloc";
import Accordian from "../Accordian";
import Assessments from "../Assessments";
import constants from "../../utils/constants";
import getData from "../../utils/getRequest";
import postData from "../../utils/postRequest";
import changeNavBold from "../../utils/changeNavBold";
import toggleMultiSelect from "../../utils/toggleMultiSelect";

const defaultFormState = {
  patient: "",
  goals: [],
  impairments: [],
  education: [],
  position: "",
  extremities: "",
  muscle_groups: [],
  sets: "",
  reps: "",
  weight: "",
  exercise_band: "",
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
    return defaultFormState;
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

export default function ArmExercise() {
  const [blurb, setBlurb] = useState("");
  const [impairments, setImpairments] = useState([]);
  const [formData, setFormData] = useReducer(formReducer, defaultFormState);

  const handleSingleSelectChange = (event) => {
    toggleMultiSelect(
        "verbal_cueing",
        "verbal_cues_given",
        "no verbal cueing",
        setFormData
      );
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

  const handleSubmit = (e) => {
    e.preventDefault();
    postData("/arm-exercises", formData).then((data) => {
      // setShowGoalBlurb(true);
      // document.getElementById("goal_blurb").innerHTML = data;
      setBlurb(data);
    });
  };

  useEffect(() => {
    getData("/get-impairments").then((data) => setImpairments(data));
  }, []);

  useEffect(() => {
    changeNavBold("nav-arm-exercises");

    // make sure collapsed content is shown if browser refreshed
    const collapsed = document.getElementById("component-collapse-ther-ex");
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
        {/* Position of patient */}

        {/* Goals */}
        <MultiSelectInput
          label="Goals Targeted"
          name="goals"
          id="goals"
          handleChange={handleMultiSelectChange}
          options={constants.goals}
        />
        {/* Impairments */}
        <MultiSelectInput
          label="Impairments Addressed"
          name="impairments"
          id="impairments"
          handleChange={handleMultiSelectChange}
          // value={formData.impairments}
          options={impairments}
        />
        {/* Education topics prior to activity */}
        <MultiSelectInput
          label="Pre-Activity Education Topics"
          id="education"
          name="education"
          handleChange={handleMultiSelectChange}
          options={constants.functionalActivityEducationTopics}
        />
        <SelectInput
          label="Patient Position"
          id="position"
          name="position"
          handleChange={handleSingleSelectChange}
          options={constants.position_exercise}
          isRequired={true}
        />
        {/* Extremities Used */}
        <SelectInput
          label="Extremities Used"
          name="extremities"
          id="extremities"
          handleChange={handleSingleSelectChange}
          options={constants.extremities}
        />
        {/* Muscle Groups */}
        <MultiSelectInput
          label="Muscle Groups Targeted"
          name="muscle_groups"
          id="muscle_groups"
          handleChange={handleMultiSelectChange}
          options={constants.muscleGroups}
        />
        {/* Number of sets */}
        <div>
          <NumberInput
            name="sets"
            id="sets"
            label="Sets"
            min="1"
            max="10"
            handleChange={handleSingleSelectChange}
          />
        </div>

        {/* Number of reps */}
        <div>
          <NumberInput
            name="reps"
            id="reps"
            label="Repetitions"
            min="1"
            max="20"
            handleChange={handleSingleSelectChange}
          />
        </div>
        {/* Amount of weight used */}
        <div>
          <NumberInput
            name="weight"
            id="weight"
            label="Weight(lbs)"
            min="1"
            max="20"
            handleChange={handleSingleSelectChange}
          />
        </div>
        <SelectInput
          label="Exercise Band"
          name="exercise_band"
          id="exercise_band"
          handleChange={handleSingleSelectChange}
          options={constants.exercise.bandColors}
        />
        {/* Physical assistance needed for activity */}
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
        />
        {/* Specific verbal cues */}
        <MultiSelectInput
          label="Verbal Cues Given"
          name="verbal_cues_given"
          id="verbal_cues_given"
          handleChange={handleMultiSelectChange}
          options={constants.exercise.verbalCues}
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
              // FIM scoring for all ADLs
              component: <FimBloc handleChange={handleSingleSelectChange} />,
              label: "FIM",
            },
            {
              // Other assessments to add
              component: (
                <Assessments handleChange={handleSingleSelectChange} />
              ),
              label: "Misc. Assessments",
            },
            {
              // patient vital signs
              component: <Vitals handleChange={handleSingleSelectChange} />,
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

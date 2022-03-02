import React, { useState, useReducer, useEffect } from "react";
import NarrativeBlurb from "../NarrativeBlurb";
import SubmitButton from "../SubmitButton";
import postData from "../../utils/postRequest";
import FormSelect from "../FormSelect";
import Modal from "../Modal";
import MultiSelectModal from "../ModalContent/MultiSelectModal";
import SingleSelectModal from "../ModalContent/SingleSelectModal";
import NumberInputModal from "../ModalContent/NumberInputModal";
import capitalizeEveryWord from "../../utils/capitalizeEveryWord";

const defaultState = {
  patient: "",
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
  education: [],
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

const patient_name_options = {
  patient: "patient",
  client: "client",
  resident: "resident",
};

const arm_bike_name_options = {
  arm_bike: "arm bike",
  omnicycle: "omnicycle",
  restorator: "restorator",
};

const goal_options = {
  eating: "eating",
  grooming: "grooming",
  bathing: "bathing",
  upper_body_dressing: "upper body dressing",
  lower_body_dressing: "lower body dressing",
  toileting: "toileting",
  toilet_transfers: "toilet transfers",
  tub_transfers: "tub transfers",
};

const impairment_options = {
  strength: "strength",
  standing_balance: "standing balance",
  sitting_balance: "sitting balance",
  gross_motor_coordination: "gross Motor Coordination",
  fine_motor_coordination: "fine Motor Coordination",
  cognition: "cognition",
  endurance: "endurance",
  sensation: "sensation",
};

const fim_options = {
  independent: "independent",
  modified_independent: "modified independent",
  supervision: "supervision",
  minimum_assistance: "minimum assistance",
  moderate_assistance: "moderate assistance",
  maximum_assistance: "maximum assistance",
  total_assistance: "total assistance",
};

const plan_options = {
  upgrade: "upgrade",
  maintain: "maintain",
  downgrade: "downgrade",
};

const verbal_cues_options = {
  none: "no verbal cueing",
  minimum: "minimum verbal cueing",
  moderate: "moderate verbal cueing",
  maximum: "maximum verbal cueing",
};

const education_topics_options = {
  safety: "safety awareness",
  ue_position: "upper extremity position",
  pacing: "pacing strategies",
  task_sequencing: "task sequencing",
};

const verbal_cues = {
  hand_placement: "hand placement",
  speed: "speed",
  posture: "posture",
  rest_breaks: "rest breaks",
  pursed_lip_breathing: "pursed lip breathing",
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
const ArmBike = () => {
  //   const [impairments, setImpairments] = useState([]);
  const [formData, setFormData] = useReducer(formReducer, defaultState);
  const [blurb, setBlurb] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    postData("/arm-bike", formData).then((data) => {
      setBlurb(data);
    });
  };

  const onClickNext = (modal, name, value, subtitleID, subtitle) => {
    setModalContent(modal);
    if (value.constructor === Array) {
      if (value.length > 0) {
        let str = value.join(", ");
        document.getElementById(subtitleID).innerHTML =
          capitalizeEveryWord(str);
      } else {
        document.getElementById(subtitleID).innerHTML = subtitle;
      }
    } else {
      if (value === "0") {
        document.getElementById(subtitleID).innerHTML = subtitle;
      } else if (value.length !== 0) {
        document.getElementById(subtitleID).innerHTML =
          capitalizeEveryWord(value);
      } else {
        document.getElementById(subtitleID).innerHTML = subtitle;
      }
    }

    setFormData({
      name: name,
      value: value,
    });
  };

  const handleModalVisit = (component) => {
    setModalContent(component);
    setModalVisible(true);
  };

  const handleOkModalClick = (name, value, subtitleID, subtitle) => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    setModalVisible(false);

    if (value.constructor === Array) {
      if (value.length > 0) {
        let str = value.join(", ");
        document.getElementById(subtitleID).innerHTML =
          capitalizeEveryWord(str);
      } else {
        document.getElementById(subtitleID).innerHTML = subtitle;
      }
    } else {
      if (value === "0") {
        document.getElementById(subtitleID).innerHTML = subtitle;
      } else if (value.length !== 0) {
        document.getElementById(subtitleID).innerHTML =
          capitalizeEveryWord(value);
      } else {
        document.getElementById(subtitleID).innerHTML = subtitle;
      }
    }

    setFormData({
      name: name,
      value: value,
    });
  };

  useEffect(() => {
    if (modalVisible) {
      const modal = document.getElementById("myModal");
      modal.style.display = "block";
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
          setModalVisible(false);
        }
      };
    }
  }, [modalVisible]);

  const planModal = (
    <SingleSelectModal
      key={"plan"}
      name={"plan"}
      title={"Plan"}
      subtitleID="plan-subtitle-id"
      options={plan_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.plan}
      subtitle="Select plan for future treatments"
      onClickNext={onClickNext}
    />
  );

  const specificVerbalCuesModal = (
    <MultiSelectModal
      key={"verbal_cues_given"}
      name={"verbal_cues_given"}
      title={"Verbal Cues Provided"}
      subtitleID="verbal-cues-given-subtitle-id"
      options={verbal_cues}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.verbal_cues_given}
      subtitle="Select one or more verbal cues given"
      nextModal={planModal}
      onClickNext={onClickNext}
    />
  );
  const verbalCuesModal = (
    <SingleSelectModal
      key={"verbal-cues-score"}
      name={"verbal_cueing"}
      title={"Verbal Cues"}
      subtitleID="verbal-cues-subtitle-id"
      subtitle="Select how many verbal cues were provided"
      options={verbal_cues_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.verbal_cueing}
      nextModal={specificVerbalCuesModal}
      onClickNext={onClickNext}
    />
  );

  const fimModal = (
    <SingleSelectModal
      key={"fim-score"}
      name={"physical_assistance"}
      title={"FIM"}
      subtitleID="physical-assistance-subtitle-id"
      subtitle="Select how much assistance was provided"
      options={fim_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.physical_assistance}
      nextModal={verbalCuesModal}
      onClickNext={onClickNext}
    />
  );

  const resistanceModal = (
    <NumberInputModal
      key="resistance-level"
      name="level"
      id="level"
      label="Resistance Level"
      min={0}
      max={10}
      prevValue={formData.level}
      onOkayClick={handleOkModalClick}
      subtitle="Select resistance level"
      subtitleID="resistance-subtitle-id"
      nextModal={fimModal}
      onClickNext={onClickNext}
    />
  );

  const timeModal = (
    <NumberInputModal
      key="machine-time"
      name="time"
      id="time"
      label="Time on Machine (mins)"
      min={0}
      max={30}
      prevValue={formData.time}
      onOkayClick={handleOkModalClick}
      subtitle="Time spent on machine"
      subtitleID="time-subtitle-id"
      nextModal={resistanceModal}
      onClickNext={onClickNext}
    />
  );

  const education_topics = (
    <MultiSelectModal
      key={"education"}
      name={"education"}
      title={"Education Topics"}
      subtitleID="education-subtitle-id"
      options={education_topics_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.education}
      subtitle="Select one or more education topics"
      nextModal={timeModal}
      onClickNext={onClickNext}
    />
  );

  const impairments = (
    <MultiSelectModal
      key={"impairments"}
      name={"impairments"}
      title={"Impairments"}
      subtitleID="impairments-subtitle-id"
      options={impairment_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.impairments}
      subtitle="Select one or more areas of impairment"
      nextModal={education_topics}
      onClickNext={onClickNext}
    />
  );

  const goals = (
    <MultiSelectModal
      key={"goals"}
      name={"goals"}
      title={"Goals"}
      subtitleID="goals-subtitle-id"
      options={goal_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.goals}
      subtitle="Select one or more goal areas"
      nextModal={impairments}
      onClickNext={onClickNext}
    />
  );

  const armBikeName = (
    <SingleSelectModal
      key={"arm-bike-name"}
      name={"name"}
      title={"Arm Bike Name"}
      subtitleID="arm-bike-name-subtitle-id"
      subtitle="Select arm bike name"
      options={arm_bike_name_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.name}
      nextModal={goals}
      onClickNext={onClickNext}
    />
  );

  const terminology = (
    <SingleSelectModal
      key={"patient-terminology"}
      name={"patient"}
      title={"Terminology"}
      subtitleID="pt-terminology-subtitle-id"
      subtitle="Select setting-specific patient terminology"
      options={patient_name_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.patient}
      nextModal={armBikeName}
      onClickNext={onClickNext}
    />
  );

  return (
    <>
      <div className="wrapper">
        <h1>Arm Bike</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <FormSelect
              title="Patient Terminology"
              subtitle="Select setting-specific patient terminology"
              subtitleID="pt-terminology-subtitle-id"
              onClick={() => handleModalVisit(terminology)}
            />
            <FormSelect
              title="Arm Bike Name"
              subtitle="Select arm bike name"
              subtitleID="arm-bike-name-subtitle-id"
              onClick={() => handleModalVisit(armBikeName)}
            />
            <FormSelect
              title="Goals"
              subtitle="Select one or more goal areas"
              subtitleID="goals-subtitle-id"
              onClick={() => handleModalVisit(goals)}
            />
            <FormSelect
              title="Impairments"
              subtitle="Select one or more impairments"
              subtitleID="impairments-subtitle-id"
              onClick={() => handleModalVisit(impairments)}
            />

            <FormSelect
              title="Education Topics"
              subtitle="Select one or more education topics"
              subtitleID="education-subtitle-id"
              onClick={() => handleModalVisit(education_topics)}
            />

            <FormSelect
              title="Time"
              subtitle="Time spent on machine"
              subtitleID="time-subtitle-id"
              onClick={() => handleModalVisit(timeModal)}
            />
            <FormSelect
              title="Level"
              subtitle="Select resistance level"
              subtitleID="resistance-subtitle-id"
              onClick={() => handleModalVisit(resistanceModal)}
            />
            <FormSelect
              title="Physical Assistance"
              subtitle="Select how much assistance was provided"
              subtitleID="physical-assistance-subtitle-id"
              onClick={() => handleModalVisit(fimModal)}
            />
            <FormSelect
              title="Verbal Cues"
              subtitle="Select how many verbal cues were provided"
              subtitleID="verbal-cues-subtitle-id"
              onClick={() => handleModalVisit(verbalCuesModal)}
            />
            <FormSelect
              title="Specific Verbal Cues"
              subtitle="Select one or more verbal cues given"
              subtitleID="verbal-cues-given-subtitle-id"
              onClick={() => handleModalVisit(specificVerbalCuesModal)}
            />
            <FormSelect
              title="Plan"
              subtitle="Select plan for future treatments"
              subtitleID="plan-subtitle-id"
              onClick={() => handleModalVisit(planModal)}
            />
            <Modal modalContent={modalContent} />
            {/* Patient terminology */}
            {/* <SelectInput
                            label="Healthcare Receiver Terminology"
                            id="patient"
                            name="patient"
                            handleChange={handleSingleSelectChange}
                            options={constants.patientTerm}
                            isRequired={true}
                        />
                        {/* Arm bike name */}
            {/* <SelectInput
                            label="Arm Bike Name"
                            id="name"
                            name="name"
                            handleChange={handleSingleSelectChange}
                            options={constants.armBikeNames}
                            isRequired={true}
                        /> */}
            {/* Position of patient */}
            {/* <SelectInput
                            label="Patient Position"
                            id="position"
                            name="position"
                            handleChange={handleSingleSelectChange}
                            options={constants.position_exercise}
                            isRequired={true}
                        /> */}
            {/* Goals */}
            {/* <MultiSelectInput
                            label="Goals Targeted"
                            name="goals"
                            id="goals"
                            handleChange={handleMultiSelectChange}
                            options={constants.goals}
                        /> */}
            {/* Physical Impairments */}
            {/* <MultiSelectInput
                            label="Impairments Addressed"
                            name="impairments"
                            id="impairments"
                            handleChange={handleMultiSelectChange}
                            options={impairments}
                        /> */}
            {/* Education topics prior to activity */}
            {/* <MultiSelectInput
                            label="Pre-Activity Education Topics"
                            id="education"
                            name="education"
                            handleChange={handleMultiSelectChange}
                            options={
                                constants.functionalActivityEducationTopics
                            }
                        /> */}
            {/* Time on activity */}
            {/* <NumberInput
                            name="time"
                            id="time"
                            label="Time"
                            min="0"
                            max="15"
                            handleChange={handleSingleSelectChange}
                        /> */}
            {/* Activity resistance level */}
            {/* <NumberInput
                            name="level"
                            id="level"
                            label="Level"
                            min="0"
                            max="10"
                            handleChange={handleSingleSelectChange}
                        /> */}
            {/* Physical assistance needed for activity */}
            {/* <SelectInput
                            label="Physical Assistance Provided"
                            id="physical_assistance"
                            name="physical_assistance"
                            handleChange={handleSingleSelectChange}
                            options={constants.assessments.fim}
                            isRequired={true}
                        /> */}
            {/* Verbal cueing required */}
            {/* <SelectInput
                            label="Verbal Cueing Required"
                            name="verbal_cueing"
                            id="verbal_cueing"
                            handleChange={handleSingleSelectChange}
                            options={constants.assessments.verbalCues}
                            isRequired={true}
                        /> */}
            {/* Specific verbal cues */}
            {/* <MultiSelectInput
                            label="Verbal Cues Given"
                            name="verbal_cues_given"
                            id="verbal_cues_given"
                            handleChange={handleMultiSelectChange}
                            options={constants.armBike.verbalCues}
                        /> */}
            {/* Plan for future sessions */}
            {/* <SelectInput
                            label="Plan"
                            name="plan"
                            id="plan"
                            handleChange={handleSingleSelectChange}
                            options={constants.plan}
                            isRequired={true}
                        /> */}
            {/* <Accordian
                            categories={[
                                {
                                    // FIM scoring for all ADLs
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
                                    // Other assessments to add
                                    component: (
                                        <Assessments
                                            handleChange={
                                                handleSingleSelectChange
                                            }
                                        />
                                    ),
                                    label: "Misc. Assessments",
                                },
                                {
                                    // patient vital signs
                                    component: (
                                        <Vitals
                                            handleChange={
                                                handleSingleSelectChange
                                            }
                                        />
                                    ),
                                    label: "Vitals",
                                },
                            ]} */}
            {/* /> */}
          </fieldset>
          <SubmitButton />
        </form>

        <NarrativeBlurb text={blurb} id="goal_blurb" />
      </div>
    </>
  );
};

export default ArmBike;

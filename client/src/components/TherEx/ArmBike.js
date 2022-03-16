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
import constants from "../../utils/constants";

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
const ArmBike = ({ title }) => {
  //   const [impairments, setImpairments] = useState([]);
  const [formData, setFormData] = useReducer(formReducer, defaultState);
  const [blurb, setBlurb] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [blurbVisible, setBlurbVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    postData("/arm-bike", formData).then((data) => {
      setBlurb(data);
      setBlurbVisible(true);
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
      options={constants.armBike.plan_options}
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
      options={constants.armBike.verbal_cues}
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
      options={constants.armBike.verbal_cues_options}
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
      options={constants.armBike.fim_options}
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
      options={constants.armBike.education_topics_options}
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
      options={constants.armBike.impairment_options}
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
      options={constants.armBike.goal_options}
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
      options={constants.armBike.arm_bike_name_options}
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
      options={constants.armBike.patient_name_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.patient}
      nextModal={armBikeName}
      onClickNext={onClickNext}
    />
  );

  return (
    <>
      <div className="wrapper fade-in">
        <div className="content-title">{title}</div>
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
          </fieldset>
          <SubmitButton />
        </form>
        {blurbVisible && <NarrativeBlurb text={blurb} id="goal_blurb" />}
      </div>
    </>
  );
};

export default ArmBike;

import { useState, useReducer, useEffect } from "react";
import SubmitButton from "../SubmitButton";
import NarrativeBlurb from "../NarrativeBlurb";
import constants from "../../utils/constants";
import postData from "../../utils/postRequest";
import SingleSelectModal from "../ModalContent/SingleSelectModal";
import MultiSelectModal from "../ModalContent/MultiSelectModal";
import capitalizeEveryWord from "../../utils/capitalizeEveryWord";
import FormSelect from "../FormSelect";
import Modal from "../Modal";

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

export default function Grooming({ title }) {
  const [formData, setFormData] = useReducer(formReducer, defaultFormState);
  const [blurb, setBlurb] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [blurbVisible, setBlurbVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    postData("/grooming", formData).then((data) => {
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

  const fimModal = (
    <SingleSelectModal
      key={"fim-score"}
      name={"fim"}
      title={"FIM"}
      subtitleID="physical-assistance-subtitle-id"
      subtitle="Select how much assistance was provided"
      options={constants.armBike.fim_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.fim}
      nextModal={""}
      onClickNext={onClickNext}
    />
  );

  const interventionsModal = (
    <MultiSelectModal
      key={"interventions"}
      name={"interventions"}
      title={"Activity-Specific Intervention Strategies"}
      subtitleID="interventions-subtitle-id"
      options={constants.interventionsGrooming}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.interventions}
      subtitle="Select one or more interventions"
      nextModal={fimModal}
      onClickNext={onClickNext}
    />
  );

  const instructionsModal = (
    <MultiSelectModal
      key={"instruction"}
      name={"instruction"}
      title={"Activity-Specific Instructions"}
      subtitle="Select one or more instructional cues"
      subtitleID="instruction-subtitle-id"
      options={constants.groomingVerbalCues}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.instruction}
      nextModal={interventionsModal}
      onClickNext={onClickNext}
    />
  );

  const educationModal = (
    <MultiSelectModal
      key={"education"}
      name={"education"}
      title={"Pre-Activity Education Topics"}
      subtitle="Select one or more education topics"
      subtitleID="education-subtitle-id"
      options={constants.functionalActivityEducationTopics}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.education}
      nextModal={instructionsModal}
      onClickNext={onClickNext}
    />
  );

  const tasksModal = (
    <MultiSelectModal
      key={"grooming_tasks"}
      name={"grooming_tasks"}
      title={"Grooming Tasks Completed"}
      subtitle="Select one or more grooming tasks"
      subtitleID="grooming-tasks-subtitle-id"
      options={constants.groomingTasks}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.grooming_tasks}
      nextModal={educationModal}
      onClickNext={onClickNext}
    />
  );

  const locationModal = (
    <SingleSelectModal
      key="location"
      name="location"
      title="Location"
      subtitleID="location-subtitle-id"
      subtitle="Select location of activity"
      options={constants.grooming.location}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.location}
      nextModal={tasksModal}
      onClickNext={onClickNext}
    />
  );

  const positionModal = (
    <SingleSelectModal
      key="position"
      name="position"
      title="Position"
      subtitleID="position-subtitle-id"
      subtitle="Select the position the activity was performed in"
      options={constants.grooming.position}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.position}
      nextModal={locationModal}
      onClickNext={onClickNext}
    />
  );

  const terminologyModal = (
    <SingleSelectModal
      key={"patient-terminology"}
      name={"patient"}
      title={"Terminology"}
      subtitleID="pt-terminology-subtitle-id"
      subtitle="Select setting-specific patient terminology"
      options={constants.armBike.patient_name_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.patient}
      nextModal={positionModal}
      onClickNext={onClickNext}
    />
  );

  return (
    <div className="fade-in-component">
      <div className="content-title">{title}</div>
      <form onSubmit={handleSubmit}>
        {/* Patient terminology */}
        <FormSelect
          title={"Terminology"}
          subtitleID="pt-terminology-subtitle-id"
          subtitle="Select setting-specific patient terminology"
          onClick={() => handleModalVisit(terminologyModal)}
        />
        <FormSelect
          title="Position"
          subtitleID="position-subtitle-id"
          subtitle="Select the position the activity was performed in"
          onClick={() => handleModalVisit(positionModal)}
        />

        <FormSelect
          title="Location"
          subtitleID="location-subtitle-id"
          subtitle="Select location of activity"
          onClick={() => handleModalVisit(locationModal)}
        />
        <FormSelect
          title={"Grooming Tasks Completed"}
          subtitle="Select one or more grooming tasks"
          subtitleID="grooming-tasks-subtitle-id"
          onClick={() => handleModalVisit(tasksModal)}
        />

        <FormSelect
          title={"Pre-Activity Education Topics"}
          subtitle="Select one or more education topics"
          subtitleID="education-subtitle-id"
          onClick={() => handleModalVisit(educationModal)}
        />

        <FormSelect
          title="Activity-Specific Instructions"
          subtitle="Select one or more instructional cues"
          subtitleID="instruction-subtitle-id"
          onClick={() => handleModalVisit(instructionsModal)}
        />
        <FormSelect
          title="Activity-Specific Interventions"
          subtitle="Select one or more interventions"
          subtitleID="interventions-subtitle-id"
          onClick={() => handleModalVisit(interventionsModal)}
        />

        <FormSelect
          title={"FIM"}
          subtitleID="physical-assistance-subtitle-id"
          subtitle="Select how much assistance was provided"
          onClick={() => handleModalVisit(fimModal)}
        />

        <Modal modalContent={modalContent} />
        
        <SubmitButton />
      </form>

      {blurbVisible && <NarrativeBlurb text={blurb} id="goal_blurb" />}
    </div>
  );
}

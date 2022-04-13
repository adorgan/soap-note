import { useState, useEffect, useReducer, useContext } from "react";
import SelectInput from "../SelectInput";
import MultiSelectInput from "../MultiSelectInput";
import constants from "../../utils/constants";
import SubmitButton from "../SubmitButton";
import NarrativeBlurb from "../NarrativeBlurb";
import postData from "../../utils/postRequest";
import SingleSelectModal from "../ModalContent/SingleSelectModal";
import MultiSelectModal from "../ModalContent/MultiSelectModal";
import capitalizeEveryWord from "../../utils/capitalizeEveryWord";
import FormSelect from "../FormSelect";
import Modal from "../Modal";
import NarrativeModal from "../ModalContent/NarrativeModal";
import { Context } from "../Context";
import NumberInputModal from "../ModalContent/NumberInputModal";

const defaultFormState = {
  patient: "",
  goals: [],
  position: "",
  support: "",
  duration: 0,
  tasks: [],
  education: [],
  instruction: [],
  interventions: [],
  LOB: 0,
  fim: "",
  verbal_cueing: "",
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

export default function DynamicBalance({ title }) {
  const [formData, setFormData] = useReducer(formReducer, defaultFormState);
  const [blurb, setBlurb] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [blurbVisible, setBlurbVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useContext(Context);

  const showToast = (msg) => {
    document.getElementById("snackbar").classList.add("show");
    document.getElementById("snackbar").innerHTML = msg;
    setTimeout(() => {
      document.getElementById("snackbar").classList.remove("show");
    }, 2900);
  };

  const copyToClipboard = (msg) => {
    showToast("Note copied to clipboard!");
    setTimeout(() => {
      if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(msg);
      }
      return Promise.reject("The Clipboard API is not available.");
    }, 1000);
    setModalVisible(false);
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  async function updateNotes(url, data) {
    await postData(url, data);
  }

  const onSaveClick = (data) => {
    if (loggedIn) {
      showToast("Note saved!");
      let newNoteForm = {};
      newNoteForm.title = "Dynamic Balance";
      newNoteForm.body = data;
      updateNotes("/add-note", newNoteForm);
    } else {
      showToast("Create an account to save notes!");
    }
    setModalVisible(false);
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData("/balance", formData).then((data) => {
      setBlurb(data);
      setModalContent(
        <NarrativeModal
          blurb={data}
          onClickCopy={copyToClipboard}
          onClickSave={onSaveClick}
        />
      );
      setModalVisible(true);
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
      options={constants.fim_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.fim}
      onClickNext={onClickNext}
    />
  );

  const lossOfBalanceModal = (
    <NumberInputModal
      key="LOB"
      name="LOB"
      id="LOB"
      label="Losses of Balance"
      min={0}
      max={10}
      prevValue={formData.LOB}
      onOkayClick={handleOkModalClick}
      subtitle="Select number of losses of balance"
      subtitleID="lob-subtitle-id"
      nextModal={fimModal}
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
      options={constants.verbal_cues_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.verbal_cueing}
      nextModal={lossOfBalanceModal}
      onClickNext={onClickNext}
    />
  );
  const interventionsModal = (
    <MultiSelectModal
      key={"interventions"}
      name={"interventions"}
      title={"Activity-Specific Intervention Strategies"}
      subtitleID="interventions-subtitle-id"
      options={constants.dynamic_balance.intervention}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.interventions}
      subtitle="Select one or more interventions"
      nextModal={verbalCuesModal}
      onClickNext={onClickNext}
    />
  );

  const durationModal = (
    <NumberInputModal
      key="duration"
      name="duration"
      id="duration"
      label="Duration"
      min={0}
      max={20}
      prevValue={formData.duration}
      onOkayClick={handleOkModalClick}
      subtitle="Select duration of activity"
      subtitleID="duration-subtitle-id"
      nextModal={interventionsModal}
      onClickNext={onClickNext}
    />
  );
  const supportModal = (
    <SingleSelectModal
      key={"support-device"}
      name={"support"}
      title={"Support Device"}
      subtitleID="support-device-subtitle-id"
      subtitle="Select device used for support during activity"
      options={constants.dynamic_balance.support}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.support}
      nextModal={durationModal}
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
      options={constants.position}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.position}
      nextModal={supportModal}
      onClickNext={onClickNext}
    />
  );

  const specificVerbalCuesModal = (
    <MultiSelectModal
      key={"instruction"}
      name={"instruction"}
      title={"Instructions Provided"}
      subtitleID="verbal-cues-given-subtitle-id"
      subtitle="Select one or more verbal cues given"
      options={constants.dynamic_balance.instruction}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.instruction}
      nextModal={positionModal}
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
      nextModal={specificVerbalCuesModal}
      onClickNext={onClickNext}
    />
  );

  const tasksModal = (
    <MultiSelectModal
      key={"tasks"}
      name={"tasks"}
      title={"Tasks"}
      subtitleID="tasks-subtitle-id"
      subtitle="Select one or more tasks"
      options={constants.dynamic_balance.tasks}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.tasks}
      nextModal={educationModal}
      onClickNext={onClickNext}
    />
  );

  const goalsModal = (
    <MultiSelectModal
      key={"goals"}
      name={"goals"}
      title={"Goals"}
      subtitleID="goals-subtitle-id"
      options={constants.goal_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.goals}
      subtitle="Select one or more goal areas"
      nextModal={tasksModal}
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
      options={constants.patient_name_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.patient}
      nextModal={goalsModal}
      onClickNext={onClickNext}
    />
  );

  return (
    <div className="fade-in-component">
      <div className="content-title">{title}</div>
      <form onSubmit={handleSubmit}>
        <FormSelect
          title={"Terminology"}
          subtitleID="pt-terminology-subtitle-id"
          subtitle="Select setting-specific patient terminology"
          onClick={() => handleModalVisit(terminologyModal)}
        />
        <FormSelect
          title="Goals"
          subtitle="Select one or more goal areas"
          subtitleID="goals-subtitle-id"
          onClick={() => handleModalVisit(goalsModal)}
        />

        <FormSelect
          title={"Tasks"}
          subtitleID="tasks-subtitle-id"
          subtitle="Select one or more tasks"
          onClick={() => handleModalVisit(tasksModal)}
        />

        <FormSelect
          title={"Pre-Activity Education Topics"}
          subtitle="Select one or more education topics"
          subtitleID="education-subtitle-id"
          onClick={() => handleModalVisit(educationModal)}
        />
        <FormSelect
          title={"Instructions Provided"}
          subtitleID="verbal-cues-given-subtitle-id"
          subtitle="Select one or more verbal cues given"
          onClick={() => handleModalVisit(specificVerbalCuesModal)}
        />

        <FormSelect
          title="Position"
          subtitleID="position-subtitle-id"
          subtitle="Select the position the activity was performed in"
          onClick={() => handleModalVisit(positionModal)}
        />

        <FormSelect
          title={"Support Device"}
          subtitleID="support-device-subtitle-id"
          subtitle="Select device used for support during activity"
          onClick={() => handleModalVisit(supportModal)}
        />

        <FormSelect
          title="Duration"
          subtitle="Select duration of activity"
          subtitleID="duration-subtitle-id"
          onClick={() => handleModalVisit(durationModal)}
        />

        <FormSelect
          title="Activity-Specific Interventions"
          subtitle="Select one or more interventions"
          subtitleID="interventions-subtitle-id"
          onClick={() => handleModalVisit(interventionsModal)}
        />

        <FormSelect
          title="Verbal Cues"
          subtitle="Select how many verbal cues were provided"
          subtitleID="verbal-cues-subtitle-id"
          onClick={() => handleModalVisit(verbalCuesModal)}
        />
        <FormSelect
          title="Losses of Balance"
          subtitle="Select number of losses of balance"
          subtitleID="lob-subtitle-id"
          onClick={() => handleModalVisit(lossOfBalanceModal)}
        />
        <FormSelect
          title={"FIM"}
          subtitleID="physical-assistance-subtitle-id"
          subtitle="Select how much assistance was provided"
          onClick={() => handleModalVisit(fimModal)}
        />
        <SubmitButton />
      </form>
      <Modal modalContent={modalContent} />
    </div>
  );
}

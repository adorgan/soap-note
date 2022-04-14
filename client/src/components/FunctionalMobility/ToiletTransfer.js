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

const defaultFormState = {
  patient: "",
  location: "",
  tasks: [],
  aids: [],
  education: [],
  instruction: [],
  interventions: [],
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

export default function ToiletTransfer({ title }) {
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
      newNoteForm.title = "Toilet Transfers";
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
    postData("/toilet-transfers", formData).then((data) => {
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
      nextModal={""}
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
      nextModal={fimModal}
      onClickNext={onClickNext}
    />
  );

  const interventionsModal = (
    <MultiSelectModal
      key={"interventions"}
      name={"interventions"}
      title={"Activity-Specific Intervention Strategies"}
      subtitleID="interventions-subtitle-id"
      options={constants.toilet_transfer.intervention}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.interventions}
      subtitle="Select one or more interventions"
      nextModal={verbalCuesModal}
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
      options={constants.toilet_transfer.instruction}
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
      options={constants.toilet_transfer.education}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.education}
      nextModal={instructionsModal}
      onClickNext={onClickNext}
    />
  );

  const aidsModal = (
    <MultiSelectModal
      key={"aids"}
      name={"aids"}
      title={"Toilet Transfer Aids"}
      subtitle="Select one or more transfer aids"
      subtitleID="toilet-transfer-aids-subtitle-id"
      options={constants.toilet_transfer.aids}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.aids}
      nextModal={educationModal}
      onClickNext={onClickNext}
    />
  );

  const tasksModal = (
    <MultiSelectModal
      key={"tasks"}
      name={"asks"}
      title={"Toilet Transfer Tasks Completed"}
      subtitle="Select one or more tasks"
      subtitleID="toilet-transfer-tasks-subtitle-id"
      options={constants.toilet_transfer.tasks}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.tasks}
      nextModal={aidsModal}
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
      options={constants.toilet_transfer.location}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.location}
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
      nextModal={locationModal}
      onClickNext={onClickNext}
    />
  );

  return (
    <div className="fade-in-component wrapper">
      <div className="content-title">{title}</div>
      <form onSubmit={handleSubmit}>
        <FormSelect
          title={"Terminology"}
          subtitleID="pt-terminology-subtitle-id"
          subtitle="Select setting-specific patient terminology"
          onClick={() => handleModalVisit(terminologyModal)}
        />

        <FormSelect
          title="Location"
          subtitleID="location-subtitle-id"
          subtitle="Select location of activity"
          onClick={() => handleModalVisit(locationModal)}
        />

        <FormSelect
          title={"Toilet Transfer Tasks Completed"}
          subtitle="Select one or more tasks"
          subtitleID="toilet-transfer-tasks-subtitle-id"
          onClick={() => handleModalVisit(tasksModal)}
        />

        <FormSelect
          title={"Toilet Transfer Aids"}
          subtitle="Select one or more transer aids"
          subtitleID="toilet-transfer-aids-subtitle-id"
          onClick={() => handleModalVisit(aidsModal)}
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
          title="Verbal Cues"
          subtitle="Select how many verbal cues were provided"
          subtitleID="verbal-cues-subtitle-id"
          onClick={() => handleModalVisit(verbalCuesModal)}
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
    </div>
  );
}

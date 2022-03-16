import { useState, useEffect, useReducer } from "react";
import SubmitButton from "../SubmitButton";
import NarrativeBlurb from "../NarrativeBlurb";
import postData from "../../utils/postRequest";
import FormSelect from "../FormSelect";
import Modal from "../Modal";
import MultiSelectModal from "../ModalContent/MultiSelectModal";
import SingleSelectModal from "../ModalContent/SingleSelectModal";
import NumberInputModal from "../ModalContent/NumberInputModal";
import capitalizeEveryWord from "../../utils/capitalizeEveryWord";
import constants from "../../utils/constants";

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

export default function ArmExercise({ title }) {
  const [blurb, setBlurb] = useState("");
  const [formData, setFormData] = useReducer(formReducer, defaultFormState);
  const [modalContent, setModalContent] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [blurbVisible, setBlurbVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    postData("/arm-exercises", formData).then((data) => {
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
      options={constants.exercise.verbalCues}
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

  const exercseBandsModal = (
    <SingleSelectModal
      key={"exercise_band"}
      name={"exercise_band"}
      title={"Exercise Band"}
      subtitleID="exercise-band-subtitle-id"
      subtitle="Select color of exercise band used"
      options={constants.exercise.bandColors}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.exercise_band}
      onClickNext={onClickNext}
      nextModal={fimModal}
    />
  );

  const weightModal = (
    <NumberInputModal
      key="weight_level"
      name="weight"
      id="weight"
      label="Weight (lbs)"
      min={0}
      max={20}
      prevValue={formData.weight}
      onOkayClick={handleOkModalClick}
      subtitle="Select weight level used"
      subtitleID="weight-subtitle-id"
      nextModal={exercseBandsModal}
      onClickNext={onClickNext}
    />
  );

  const repsModal = (
    <NumberInputModal
      key="reps"
      name="reps"
      id="reps"
      label="Repetitions"
      min={0}
      max={50}
      prevValue={formData.reps}
      onOkayClick={handleOkModalClick}
      subtitle="Select number of repetitions completed per set"
      subtitleID="repetitions-subtitle-id"
      nextModal={weightModal}
      onClickNext={onClickNext}
    />
  );

  const setsModal = (
    <NumberInputModal
      key="sets"
      name="sets"
      id="sets"
      label="Sets"
      min={0}
      max={10}
      prevValue={formData.sets}
      onOkayClick={handleOkModalClick}
      subtitle="Select number of sets completed"
      subtitleID="sets-subtitle-id"
      nextModal={repsModal}
      onClickNext={onClickNext}
    />
  );

  const muscleGroupsModal = (
    <MultiSelectModal
      key={"muscle_groups"}
      name={"muscle_groups"}
      title={"Muscle Groups Targeted"}
      subtitleID="muscle-groups-subtitle-id"
      subtitle="Select one or more muscle groups targeted"
      options={constants.muscleGroups}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.muscle_groups}
      nextModal={setsModal}
      onClickNext={onClickNext}
    />
  );

  const extremitiesModal = (
    <SingleSelectModal
      key={"extremities"}
      name={"extremities"}
      title={"Extremeties Targeted"}
      subtitleID="extremities-subtitle-id"
      subtitle="Select extremeties used"
      options={constants.extremities}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.extremities}
      nextModal={muscleGroupsModal}
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
      nextModal={extremitiesModal}
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
      nextModal={positionModal}
      onClickNext={onClickNext}
    />
  );

  const impairmentsModal = (
    <MultiSelectModal
      key={"impairments"}
      name={"impairments"}
      title={"Impairments"}
      subtitleID="impairments-subtitle-id"
      options={constants.armBike.impairment_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.impairments}
      subtitle="Select one or more areas of impairment"
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
      options={constants.armBike.goal_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.goals}
      subtitle="Select one or more goal areas"
      nextModal={impairmentsModal}
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
      nextModal={goalsModal}
      onClickNext={onClickNext}
    />
  );
  return (
    <div className="fade-in">
      <div className="content-title">{title}</div>

      <form onSubmit={handleSubmit}>
        <FormSelect
          title="Patient Terminology"
          subtitle="Select setting-specific patient terminology"
          subtitleID="pt-terminology-subtitle-id"
          onClick={() => handleModalVisit(terminologyModal)}
        />
        <FormSelect
          title="Goals"
          subtitle="Select one or more goal areas"
          subtitleID="goals-subtitle-id"
          onClick={() => handleModalVisit(goalsModal)}
        />
        <FormSelect
          title="Impairments"
          subtitle="Select one or more impairments"
          subtitleID="impairments-subtitle-id"
          onClick={() => handleModalVisit(impairmentsModal)}
        />
        <FormSelect
          title={"Pre-Activity Education Topics"}
          subtitle="Select one or more education topics"
          subtitleID="education-subtitle-id"
          onClick={() => handleModalVisit(educationModal)}
        />
        <FormSelect
          title="Position"
          subtitleID="position-subtitle-id"
          subtitle="Select the position the activity was performed in"
          onClick={() => handleModalVisit(positionModal)}
        />
        <FormSelect
          title={"Extremeties Targeted"}
          subtitleID="extremities-subtitle-id"
          subtitle="Select extremeties used"
          onClick={() => handleModalVisit(extremitiesModal)}
        />

        <FormSelect
          title={"Muscle Groups Targeted"}
          subtitleID="muscle-groups-subtitle-id"
          subtitle="Select one or more muscle groups targeted"
          onClick={() => handleModalVisit(muscleGroupsModal)}
        />
        <FormSelect
          title="Sets"
          subtitle="Select number of sets completed"
          subtitleID="sets-subtitle-id"
          onClick={() => handleModalVisit(setsModal)}
        />
        <FormSelect
          title="Repetitions"
          subtitle="Select number of repetitions completed per set"
          subtitleID="repetitions-subtitle-id"
          onClick={() => handleModalVisit(repsModal)}
        />
        <FormSelect
          title="Weight"
          subtitle="Select weight level used"
          subtitleID="weight-subtitle-id"
          onClick={() => handleModalVisit(weightModal)}
        />
        <FormSelect
          title={"Exercise Band"}
          subtitleID="exercise-band-subtitle-id"
          subtitle="Select color of exercise band used"
          onClick={() => handleModalVisit(exercseBandsModal)}
        />
        <FormSelect
          title={"FIM"}
          subtitleID="physical-assistance-subtitle-id"
          subtitle="Select how much assistance was provided"
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
        {/* <Accordian
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
        /> */}
        <Modal modalContent={modalContent} />

        <SubmitButton />
      </form>
      {blurbVisible && <NarrativeBlurb text={blurb} id="goal_blurb" />}

    </div>
  );
}

import React, { useState, useReducer, useEffect } from "react";
// import NumberInput from "../NumberInput";
// import Vitals from "../Vitals";
// import SelectInput from "../SelectInput";
// import MultiSelectInput from "../MultiSelectInput";
import NarrativeBlurb from "../NarrativeBlurb";
// import Accordian from "../Accordian";
// import Assessments from "../Assessments";
import SubmitButton from "../SubmitButton";
// import FimBloc from "../FimBloc";
import postData from "../../utils/postRequest";
import getData from "../../utils/getRequest";
// import constants from "../../utils/constants";
import changeNavBold from "../../utils/changeNavBold";
// import toggleMultiSelect from "../../utils/toggleMultiSelect";
import FormSelect from "../FormSelect";
import Modal from "../Modal";
import MultiSelectModal from "../ModalContent/MultiSelectModal";
import SingleSelectModal from "../ModalContent/SingleSelectModal";

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
  patient: "Patient",
  client: "Client",
  resident: "Resident",
};

const arm_bike_name_options = {
  arm_bike: "Arm Bike",
  omnicycle: "Omnicycle",
  restorator: "Restorator",
};

const goal_options = {
  eating: "Eating",
  grooming: "Grooming",
  bathing: "Bathing",
  upper_body_dressing: "Upper Body Dressing",
  lower_body_dressing: "Lower Body Dressing",
  toileting: "Toileting",
  toilet_transfers: "Toilet Transfers",
  tub_transfers: "Tub Transfers",
};

const impairment_options = {
  strength: "Strength",
  standing_balance: "Standing Balance",
  sitting_balance: "Sitting Balance",
  gross_motor_coordination: "Gross Motor Coordination",
  fine_motor_coordination: "Fine Motor Coordination",
  cognition: "Cognition",
  endurance: "Endurance",
  sensation: "Sensation",
};

const fim_options = {
  independent: "Independent",
  modified_independent: "Modified Independent",
  supervision: "Supervision",
  minimum_assistance: "Minimum Assistance",
  moderate_assistance: "Moderate Assistance",
  maximum_assistance: "Maximum Assistance",
  total_assistance: "Total Assistance",
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

  //   console.log(formData);

  // const handleSingleSelectChange = (event) => {
  //     toggleMultiSelect(
  //         "verbal_cueing",
  //         "verbal_cues_given",
  //         "no verbal cueing",
  //         setFormData
  //     );
  //     setFormData({
  //         name: event.target.name,
  //         value: event.target.value,
  //     });
  // };

  // const handleMultiSelectChange = (e) => {
  //     // make array of multi selected options
  //     const selected = document.getElementById(e.target.id).selectedOptions;
  //     let selectedArray = [];
  //     for (let element of selected) {
  //         selectedArray.push(element.value);
  //     }
  //     // update form element state with new array values
  //     setFormData({
  //         name: e.target.name,
  //         value: selectedArray,
  //     });
  // };

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
        document.getElementById(subtitleID).innerHTML = value.join(", ");
      } else {
        document.getElementById(subtitleID).innerHTML = subtitle;
      }
    } else {
      if (value.length !== 0) {
        document.getElementById(subtitleID).innerHTML = value;
      } else {
        document.getElementById(subtitleID).innerHTML = subtitle;
      }
    }

    setFormData({
      name: name,
      value: value,
    });
  };

  // const handleClick = () => {
  //     console.log("hello");
  // };

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

  //   useEffect(() => {
  //     getData("/get-impairments").then((data) => setImpairments(data));
  //   }, []);

  useEffect(() => {
    changeNavBold("nav-arm-bike");

    // make sure collapsed content in nav is shown if browser refreshed
    const collapsed = document.getElementById("component-collapse-ther-ex");
    collapsed.classList.add("show");
  }, []);

  const terminology = (
    <SingleSelectModal
      key={"patient-terminology"}
      name={"patient"}
      subtitleID="pt-terminology-subtitle-id"
      subtitle="Select setting-specific patient terminology"
      options={patient_name_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.patient}
    />
  );

  const armBikeName = (
    <SingleSelectModal
      key={"arm-bike-name"}
      name={"name"}
      subtitleID="arm-bike-name-subtitle-id"
      subtitle="Select arm bike name"
      options={arm_bike_name_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.name}
    />
  );

  const goals = (
    <MultiSelectModal
      key={"goals"}
      name={"goals"}
      subtitleID="goals-subtitle-id"
      options={goal_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.goals}
      subtitle="Select one or more goal areas"
    />
  );

  const impairments = (
    <MultiSelectModal
      key={"impairments"}
      name={"impairments"}
      subtitleID="impairments-subtitle-id"
      options={impairment_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.impairments}
      subtitle="Select one or more areas of impairment"
    />
  );


  const fimModal = (
    <SingleSelectModal
      key={"fim-score"}
      name={"physical_assistance"}
      subtitleID="physical-assistance-subtitle-id"
      subtitle="Select how much assistance was provided"
      options={fim_options}
      onOkayClick={handleOkModalClick}
      prevSelected={formData.physical_assistance}
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
              title="Time"
              subtitle="Time spent on machine"
              subtitleID="time-subtitle-id"
            />
            <FormSelect
              title="Level"
              subtitle="Select resistance level"
              subtitleID="resistance-subtitle-id"
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
            />
            <FormSelect
              title="Plan"
              subtitle="Select plan for future treatments"
              subtitleID="plan-subtitle-id"
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

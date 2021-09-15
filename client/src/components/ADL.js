import { useState, useReducer } from "react";
import Accordian from "./Accordian";
import Eating from "./ADLs/Eating";
import Grooming from "./ADLs/Grooming";
import Bathing from "./ADLs/Bathing";
import UpperBodyDressing from "./ADLs/UpperBodyDressing";
import LowerBodyDressing from "./ADLs/LowerBodyDressing";
import NarrativeBlurb from "./NarrativeBlurb";
import postData from "../utils/postRequest";
import Toileting from "./ADLs/Toileting";

const defaultFormState = {
  eating_position: "",
  eating_location: "",
  eating_tasks: [],
  eating_education: [],
  eating_instruction: [],
  eating_interventions: [],
  eating_adaptive_equipment: [],
  eating_fim: "",
  eating_verbal_cueing: "",
  //   grooming
  grooming_position: "",
  grooming_location: "",
  grooming_tasks: [],
  grooming_education: [],
  grooming_instruction: [],
  grooming_interventions: [],
  //   grooming_adaptive_equipment: [],
  grooming_fim: "",
  grooming_verbal_cueing: "",
  // bathing
  bathing_position: "",
  bathing_location: "",
  bathing_tasks: [],
  bathing_education: [],
  bathing_instruction: [],
  bathing_interventions: [],
  bathing_adaptive_equipment: [],
  bathing_fim: "",
  bathing_verbal_cueing: "",

  // Upper body dressing
  upper_dressing_position: "",
  upper_dressing_location: "",
  upper_dressing_tasks: [],
  upper_dressing_education: [],
  upper_dressing_instruction: [],
  upper_dressing_interventions: [],
  upper_dressing_adaptive_equipment: [],
  upper_dressing_fim: "",
  upper_dressing_verbal_cueing: "",

  // Lower body dressing
  lower_dressing_position: "",
  lower_dressing_location: "",
  lower_dressing_tasks: [],
  lower_dressing_education: [],
  lower_dressing_instruction: [],
  lower_dressing_interventions: [],
  lower_dressing_adaptive_equipment: [],
  lower_dressing_fim: "",
  lower_dressing_verbal_cueing: "",

  // Lower body dressing
  toileting_position: "",
  toileting_location: "",
  toileting_tasks: [],
  toileting_education: [],
  toileting_instruction: [],
  toileting_interventions: [],
  toileting_adaptive_equipment: [],
  toileting_fim: "",
  toileting_verbal_cueing: "",
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

export default function ADL() {
  const [formData, setFormData] = useReducer(formReducer, defaultFormState);
  const [blurb, setBlurb] = useState("");

  const handleSingleSelectChange = (event) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    postData("/ADL", formData).then((data) => {
      setBlurb(data);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Accordian
          categories={[
            {
              component: (
                <Eating
                  handleMultiSelectChange={handleMultiSelectChange}
                  handleSingleSelectChange={handleSingleSelectChange}
                />
              ),
              label: "Eating",
            },
            {
              component: (
                <Grooming
                  handleMultiSelectChange={handleMultiSelectChange}
                  handleSingleSelectChange={handleSingleSelectChange}
                />
              ),
              label: "Grooming",
            },
            {
              component: (
                <Bathing
                  handleMultiSelectChange={handleMultiSelectChange}
                  handleSingleSelectChange={handleSingleSelectChange}
                />
              ),
              label: "Bathing",
            },
            {
                component: (
                  <UpperBodyDressing
                    handleMultiSelectChange={handleMultiSelectChange}
                    handleSingleSelectChange={handleSingleSelectChange}
                  />
                ),
                label: "Upper Body Dressing",
              },
              {
                component: (
                  <LowerBodyDressing
                    handleMultiSelectChange={handleMultiSelectChange}
                    handleSingleSelectChange={handleSingleSelectChange}
                  />
                ),
                label: "Lower Body Dressing",
              },
              {
                component: (
                  <Toileting
                    handleMultiSelectChange={handleMultiSelectChange}
                    handleSingleSelectChange={handleSingleSelectChange}
                  />
                ),
                label: "Toileting",
              },
          ]}
        />
        <button type="submit">Submit</button>
      </form>
      <NarrativeBlurb text={blurb} id="blurb" />
    </>
  );
}

const makeBathingBlurb = (
    bathing_position,
    bathing_location,
    bathing_fim,
    bathing_verbal_cueing,
    bathing_tasks,
    bathing_education,
    bathing_instruction,
    bathing_interventions,
    bathing_adaptive_equipment
  ) => {
    // return empty string if all items empty
    if (
      bathing_position === "" &&
      bathing_location === "" &&
      bathing_fim === "" &&
      bathing_verbal_cueing === "" &&
      bathing_tasks === "" &&
      bathing_education === "" &&
      bathing_instruction === "" &&
      bathing_interventions === "" &&
      bathing_adaptive_equipment === ""
    ) {
      return "";
    }
    const blurb = `In order to improve the resident's independence with bathing,
    the therapist first educated the resident regarding ${bathing_education} while
    initiating a treatment session with the resident ${bathing_position} in the ${bathing_location}.
    The therapist instructed the resident in ${bathing_instruction} while utilizing ${bathing_interventions}
    to maximize success. The therapist guided the resident to also use ${bathing_adaptive_equipment} to further assist.
    The therapist provided ${bathing_fim} and ${bathing_verbal_cueing} for the resident
    to complete ${bathing_tasks}.`;
  
    return blurb;
  };
  
  module.exports = makeBathingBlurb;
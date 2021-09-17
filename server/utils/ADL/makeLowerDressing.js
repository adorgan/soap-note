const makeLowerDressingBlurb = (
    lower_dressing_position,
    lower_dressing_location,
    lower_dressing_fim,
    lower_dressing_verbal_cueing,
    lower_dressing_tasks,
    lower_dressing_education,
    lower_dressing_instruction,
    lower_dressing_interventions,
    lower_dressing_adaptive_equipment
  ) => {
    // return empty string if all items empty
    if (
      lower_dressing_position === "" &&
      lower_dressing_location === "" &&
      lower_dressing_fim === "" &&
      lower_dressing_verbal_cueing === "" &&
      lower_dressing_tasks === "" &&
      lower_dressing_education === "" &&
      lower_dressing_instruction === "" &&
      lower_dressing_interventions === "" &&
      lower_dressing_adaptive_equipment === ""
    ) {
      return "";
    }
    const blurb = `In order to improve the resident's independence with lower body dressing,
    the therapist first educated the resident regarding ${lower_dressing_education} while
    initiating a treatment session with the resident ${lower_dressing_position} in the ${lower_dressing_location}.
    The therapist instructed the resident in ${lower_dressing_instruction} while utilizing ${lower_dressing_interventions}
    to maximize success. The therapist guided the resident to also use ${lower_dressing_adaptive_equipment} to further assist.
    The therapist provided ${lower_dressing_fim} and ${lower_dressing_verbal_cueing} for the resident
    to complete ${lower_dressing_tasks}.`;
  
    return blurb;
  };
  
  module.exports = makeLowerDressingBlurb;
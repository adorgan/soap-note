const makeUpperDressingBlurb = (
    upper_dressing_position,
    upper_dressing_location,
    upper_dressing_fim,
    upper_dressing_verbal_cueing,
    upper_dressing_tasks,
    upper_dressing_education,
    upper_dressing_instruction,
    upper_dressing_interventions,
    upper_dressing_adaptive_equipment
  ) => {
    // return empty string if all items empty
    if (
      upper_dressing_position === "" &&
      upper_dressing_location === "" &&
      upper_dressing_fim === "" &&
      upper_dressing_verbal_cueing === "" &&
      upper_dressing_tasks === "" &&
      upper_dressing_education === "" &&
      upper_dressing_instruction === "" &&
      upper_dressing_interventions === "" &&
      upper_dressing_adaptive_equipment === ""
    ) {
      return "";
    }
    const blurb = `In order to improve the resident's independence with upper body dressing,
    the therapist first educated the resident regarding ${upper_dressing_education} while
    initiating a treatment session with the resident ${upper_dressing_position} in the ${upper_dressing_location}.
    The therapist instructed the resident in ${upper_dressing_instruction} while utilizing ${upper_dressing_interventions}
    to maximize success. The therapist guided the resident to also use ${upper_dressing_adaptive_equipment} to further assist.
    The therapist provided ${upper_dressing_fim} and ${upper_dressing_verbal_cueing} for the resident
    to complete ${upper_dressing_tasks}.`;
  
    return blurb;
  };
  
  module.exports = makeUpperDressingBlurb;
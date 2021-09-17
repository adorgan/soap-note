const makeToiletingBlurb = (
    toileting_position,
    toileting_location,
    toileting_fim,
    toileting_verbal_cueing,
    toileting_tasks,
    toileting_education,
    toileting_instruction,
    toileting_interventions,
    toileting_adaptive_equipment
  ) => {
    // return empty string if all items empty
    if (
      toileting_position === "" &&
      toileting_location === "" &&
      toileting_fim === "" &&
      toileting_verbal_cueing === "" &&
      toileting_tasks === "" &&
      toileting_education === "" &&
      toileting_instruction === "" &&
      toileting_interventions === "" &&
      toileting_adaptive_equipment === ""
    ) {
      return "";
    }
    const blurb = `In order to improve the resident's independence with toileting,
    the therapist first educated the resident regarding ${toileting_education} while
    initiating a treatment session with the resident ${toileting_position} in the ${toileting_location}.
    The therapist instructed the resident in ${toileting_instruction} while utilizing ${toileting_interventions}
    to maximize success. The therapist guided the resident to also use ${toileting_adaptive_equipment} to further assist.
    The therapist provided ${toileting_fim} and ${toileting_verbal_cueing} for the resident
    to complete ${toileting_tasks}.`;
  
    return blurb;
  };
  
  module.exports = makeToiletingBlurb;
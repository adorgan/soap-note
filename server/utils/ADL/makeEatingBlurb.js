const makeEatingBlurb = (
  eating_position,
  eating_location,
  eating_fim,
  eating_verbal_cueing,
  eating_tasks,
  eating_education,
  eating_instruction,
  eating_interventions,
  eating_adaptive_equipment
) => {
  // return empty string if all items empty
  if (
    eating_position === "" &&
    eating_location === "" &&
    eating_fim === "" &&
    eating_verbal_cueing === "" &&
    eating_tasks === "" &&
    eating_education === "" &&
    eating_instruction === "" &&
    eating_interventions === "" &&
    eating_adaptive_equipment === ""
  ) {
    return "";
  }
  const blurb = `In order to improve the resident's independence with eating,
  the therapist first educated the resident regarding ${eating_education} while
  initiating a treatment session with the resident ${eating_position} in the ${eating_location}.
  The therapist instructed the resident in ${eating_instruction} while utilizing ${eating_interventions}
  to maximize success. The therapist guided the resident to also use ${eating_adaptive_equipment} to further assist.
  The therapist provided ${eating_fim} and ${eating_verbal_cueing} for the resident
  to complete ${eating_tasks}.`;

  return blurb;
};

module.exports = makeEatingBlurb;

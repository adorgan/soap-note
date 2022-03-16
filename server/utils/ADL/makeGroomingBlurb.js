const makeGroomingBlurb = (
  grooming_position,
  grooming_location,
  grooming_fim,
  grooming_verbal_cueing,
  grooming_tasks,
  grooming_education,
  grooming_instruction,
  grooming_interventions
  // grooming_adaptive_equipment
) => {
  // return empty string if all items empty
  if (
    grooming_position === "" &&
    grooming_location === "" &&
    grooming_fim === "" &&
    grooming_verbal_cueing === "" &&
    grooming_tasks === "" &&
    grooming_education === "" &&
    grooming_instruction === "" &&
    grooming_interventions === ""
  ) {
    return "";
  }

  const blurb = `In order to improve the resident's independence with grooming,
  the therapist first educated the resident regarding ${grooming_education} while
  initiating a treatment session with the resident ${grooming_position} in the 
    ${grooming_location}. The therapist instructed the resident in ${grooming_instruction} 
    while utilizing ${grooming_interventions} to maximize success.
    The therapist provided ${grooming_fim} and ${grooming_verbal_cueing} for the resident
    to complete ${grooming_tasks}.`;

  return blurb;
};

module.exports = makeGroomingBlurb;

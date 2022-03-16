const makeToiletTransfer = (
  toilet_transfer_location,
  toilet_transfer_tasks,
  toilet_transfer_aids,
  toilet_transfer_education,
  toilet_transfer_instruction,
  toilet_transfer_interventions,
  toilet_transfer_fim,
  toilet_transfer_verbal_cueing
) => {
  // return empty string if all items empty
  if (
    toilet_transfer_location === "" &&
    toilet_transfer_tasks === "" &&
    toilet_transfer_aids === "" &&
    toilet_transfer_education === "" &&
    toilet_transfer_instruction === "" &&
    toilet_transfer_interventions === "" &&
    toilet_transfer_fim === "" &&
    toilet_transfer_verbal_cueing === ""
  ) {
    return "";
  }
  const blurb = `In order to improve the resident's independence with toilet transfers, ` +
  `the therapist first educated the resident regarding ${toilet_transfer_education} while ` +
  `initiating a treatment session with the resident in the ${toilet_transfer_location}. ` +
  `The therapist instructed the resident to ${toilet_transfer_instruction} while utilizing ${toilet_transfer_interventions} ` +
  `to maximize success. The therapist provided ${toilet_transfer_fim} and ${toilet_transfer_verbal_cueing} for the resident ` +
  `to complete ${toilet_transfer_tasks} transfers using ${toilet_transfer_aids}.`;

  return blurb;
};

module.exports = makeToiletTransfer;

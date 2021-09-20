const makeTubTransfer = (
    tub_transfer_location,
    tub_transfer_tasks,
    tub_transfer_aids,
    tub_transfer_education,
    tub_transfer_instruction,
    tub_transfer_interventions,
    tub_transfer_adaptive_equipment,
    tub_transfer_fim,
    tub_transfer_verbal_cueing
) => {
    // return empty string if all items empty
    if (
        tub_transfer_location === "" &&
        tub_transfer_tasks === "" &&
        tub_transfer_aids === "" &&
        tub_transfer_education === "" &&
        tub_transfer_instruction === "" &&
        tub_transfer_interventions === "" &&
        tub_transfer_adaptive_equipment === "" &&
        tub_transfer_fim === "" &&
        tub_transfer_verbal_cueing === ""
    ) {
        return "";
    }
    const blurb = `In order to improve the resident's independence with tub transfers,
    the therapist first educated the resident regarding ${tub_transfer_education} while
    initiating a treatment session with the resident in the ${tub_transfer_location}.
    The therapist instructed the resident to ${tub_transfer_instruction} while utilizing ${tub_transfer_interventions}
    to maximize success. The therapist guided the resident to also use a ${tub_transfer_adaptive_equipment} to further assist.
    The therapist provided ${tub_transfer_fim} and ${tub_transfer_verbal_cueing} for the resident
    to complete ${tub_transfer_tasks} transfers using a ${tub_transfer_aids}.`;

    return blurb;
};

module.exports = makeTubTransfer;

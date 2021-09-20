const makeBedMobility = (
    bed_mobility_location,
    bed_mobility_tasks,
    bed_mobility_aids,
    bed_mobility_education,
    bed_mobility_instruction,
    bed_mobility_interventions,
    // bed_mobility_adaptive_equipment,
    bed_mobility_fim,
    bed_mobility_verbal_cueing
) => {
    // return empty string if all items empty
    if (
        bed_mobility_location === "" &&
        bed_mobility_tasks === "" &&
        bed_mobility_aids === "" &&
        bed_mobility_education === "" &&
        bed_mobility_instruction === "" &&
        bed_mobility_interventions === "" &&
        // bed_mobility_adaptive_equipment === "" &&
        bed_mobility_fim === "" &&
        bed_mobility_verbal_cueing === ""
    ) {
        return "";
    }
    const blurb = `In order to improve the resident's independence with bed mobility,
    the therapist first educated the resident regarding ${bed_mobility_education} while
    initiating a treatment session with the resident in the ${bed_mobility_location}.
    The therapist instructed the resident to ${bed_mobility_instruction} while utilizing ${bed_mobility_interventions}
    to maximize success.
    The therapist provided ${bed_mobility_fim} and ${bed_mobility_verbal_cueing} for the resident
    to complete ${bed_mobility_tasks} transfers using a ${bed_mobility_aids}.`;

    return blurb;
};

module.exports = makeBedMobility;

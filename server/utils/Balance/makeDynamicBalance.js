const makeDynamicBalance = (
    dynamic_balance_patient,
    dynamic_balance_goals,
    dynamic_balance_position,
    dynamic_balance_support,
    dynamic_balance_duration,
    dynamic_balance_LOB,
    dynamic_balance_tasks,
    dynamic_balance_education,
    dynamic_balance_instruction,
    dynamic_balance_interventions,
    dynamic_balance_fim,
    dynamic_balance_verbal_cueing
) => {
    // return empty string if all items empty
    if (
        dynamic_balance_patient === "" &&
        dynamic_balance_goals === "" &&
        dynamic_balance_position === "" &&
        dynamic_balance_support === "" &&
        dynamic_balance_duration === "" &&
        dynamic_balance_LOB === "" &&
        dynamic_balance_tasks === "" &&
        dynamic_balance_education === "" &&
        dynamic_balance_instruction === "" &&
        dynamic_balance_interventions === "" &&
        dynamic_balance_fim === "" &&
        dynamic_balance_verbal_cueing === ""
    ) {
        return "";
    }
    const blurb = `In or to improve the ${dynamic_balance_patient}'s safety
    and independence with ${dynamic_balance_goals}, the therapist initiated
    a treatment intervention focusing on dynamic balance. The therapist
    educated the ${dynamic_balance_patient} regarding ${dynamic_balance_education} 
    while guiding the ${dynamic_balance_patient} to ${dynamic_balance_tasks}
    while ${dynamic_balance_position} using the ${dynamic_balance_support} for support.
    The therapist instructed the ${dynamic_balance_patient} to ${dynamic_balance_instruction}
    while completing ${dynamic_balance_duration} minutes of each activity before resting. 
    The therapist provided ${dynamic_balance_fim} and ${dynamic_balance_verbal_cueing}. 
    ${dynamic_balance_LOB} losses of balance noted throughout.
    `;

    return blurb;
};

module.exports = makeDynamicBalance;

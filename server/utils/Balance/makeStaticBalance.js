const makeStaticBalance = (
    static_balance_patient,
    static_balance_goals,
    static_balance_position,
    static_balance_support,
    static_balance_duration,
    static_balance_LOB,
    static_balance_tasks,
    static_balance_education,
    static_balance_instruction,
    static_balance_interventions,
    static_balance_fim,
    static_balance_verbal_cueing
) => {
    // return empty string if all items empty
    if (
        static_balance_patient === "" &&
        static_balance_goals === "" &&
        static_balance_position === "" &&
        static_balance_support === "" &&
        static_balance_duration === "" &&
        static_balance_LOB === "" &&
        static_balance_tasks === "" &&
        static_balance_education === "" &&
        static_balance_instruction === "" &&
        static_balance_interventions === "" &&
        static_balance_fim === "" &&
        static_balance_verbal_cueing === ""
    ) {
        return "";
    }
    const blurb = `In or to improve the ${static_balance_patient}'s safety
    and independence with ${static_balance_goals}, the therapist initiated
    a treatment intervention focusing on static balance. The therapist
    educated the ${static_balance_patient} regarding ${static_balance_education} 
    while guiding the ${static_balance_patient} to ${static_balance_tasks}
    while ${static_balance_position} using the ${static_balance_support} for support.
    The therapist instructed the ${static_balance_patient} to ${static_balance_instruction}
    while completing ${static_balance_duration} minutes of each activity before resting. 
    The therapist provided ${static_balance_fim} and ${static_balance_verbal_cueing}. 
    ${static_balance_LOB} losses of balance noted throughout.
    `;

    return blurb;
};

module.exports = makeStaticBalance;

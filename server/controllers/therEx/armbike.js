/**
 * This makes a comma separated list of strings.
 * Ex. ["one", "two", "three"] -> "one, two, and three"
 *
 * @param {string[]} stringArray array of strings to be formatted as list
 * @returns {string} comma separated list of strings
 */
const makeList = (stringArray) => {
    let stringList = "";
    if (stringArray.length === 1) {
        stringList = stringArray[0];
    } else if (stringArray.length === 2) {
        stringList = `${stringArray[0]} and ${stringArray[1]}`;
    } else {
        const len = stringArray.length;
        for (let i = 0; i < len - 1; i++) {
            stringList += `${stringArray[i]}, `;
        }
        stringList += `and ${stringArray[len - 1]}`;
    }
    return stringList;
};

/**
 * This returns a string indicating how much help the therapist provided for the activity
 *
 * @param {string} client string to describe the patient
 * @param {string} assistLevel FIM level string
 * @returns {string} string describing assistance provided
 */
const assistBlurb = (client, assistLevel, verbalCues) => {
    const assistDict = {
        independent: `The ${client} completed the activity independently with ${verbalCues}.`,
        "modified independent": `The ${client} completed the activity with modified independence  ${verbalCues}.`,
        supervision: `The therapist provided supervision and ${verbalCues} to the ${client} to safely complete the activity.`,
        "minimum assistance": `The therapist provided minimum assistance and ${verbalCues} to the ${client} to safely complete the activity.`,
        "moderate assistance": `The therapist provided moderate assistance and ${verbalCues} to the ${client} to safely complete the activity.`,
        "maximum assistance": `The therapist provided maximum assistance and ${verbalCues} to the ${client} to safely complete the activity.`,
        dependent: `The therapist provided total assistance and ${verbalCues} to the ${client} to safely complete the activity.`,
    };

    return assistDict[assistLevel];
};

/**
 * This creates a narrative summary of the arm bike and sends back in response
 * @param {Object} req
 * @param {Object} res
 * @returns {JSON} json-formatted response
 */
const createArmBike = (req, res) => {
    const patient = req.body.patient; // patient terminology
    const verbalCues = req.body.verbal_cueing;
    const goalStr = makeList(req.body.goals);
    const impairmentStr = makeList(req.body.impairments);
    const assistStr = assistBlurb(patient, req.body.fim_arm_bike, verbalCues);

    const armBikeStr = `In order to improve the ${patient}'s ${impairmentStr} 
    for greater safety and independence with ${goalStr}, the therapist instructed the 
    ${patient} in safe completion of the arm bike. The ${patient} completed ${req.body.arm_bike_time} minutes on level 
    ${req.body.arm_bike_level}. ${assistStr} The ${patient} tolerated the activity well with minimal 
    rest breaks and denied pain with activity. The ${patient} will continue to benefit 
    from BUE strengthening and gross motor activities to maximize their independence 
    with ADLs prior to discharge.`;

    return res.json(armBikeStr);
};

module.exports = createArmBike;

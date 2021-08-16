const makeCommaList = require("../../utils/makeCommaList");

const makePlan = (plan, client, goals) => {
    console.log(plan);
    let planStatement = "";
    switch (plan) {
        case "upgrade":
            planStatement = `Based on the ${client}'s positive response to this treatment 
            intervention, future sessions will upgrade the challenge to better meet their 
            needs and maximize their potential to achieve ${goals} goals.`;
            break;

        case "downgrade":
            planStatement = `Based on the ${client}'s difficult response to this treatment 
            intervention, future sessions will downgrade the challenge to better meet their 
            needs and maximize their potential to achieve ${goals} goals.`;
            break;

        case "maintain":
            planStatement = `Based on the ${client}'s satisfactory response to this treatment 
            intervention, future sessions will maintain the challenge to best meet their 
            needs and maximize their potential to achieve ${goals} goals.`;
            break;

        default:
            planStatement = "error";
            break;
    }

    return planStatement;
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
    const armBikeName = req.body.arm_bike_name;
    const verbalCues = req.body.verbal_cueing;
    const goalStr = makeCommaList(req.body.goals);
    const impairmentStr = makeCommaList(req.body.impairments);
    const assistStr = assistBlurb(patient, req.body.fim_arm_bike, verbalCues);
    const planStr = makePlan(req.body.plan, req.body.patient, goalStr);

    const armBikeStr = `In order to improve the ${patient}'s ${impairmentStr} 
    for greater safety and independence with ${goalStr}, the therapist instructed the 
    ${patient} in safe completion of the ${armBikeName}. The ${patient} completed ${req.body.arm_bike_time} minutes on level 
    ${req.body.arm_bike_level}. ${assistStr} The ${patient} tolerated the activity well with minimal 
    rest breaks and denied pain with activity. ${planStr}`;

    return res.json(armBikeStr);
};

module.exports = createArmBike;

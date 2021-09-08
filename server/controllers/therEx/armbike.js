const makeCommaList = require("../../utils/makeCommaList");
const makePlan = require("../../utils/makePlan");
const makeAssessments = require("../../utils/makeAssessments");
const makeVitals = require("../../utils/makeVitals");



/**
 * This returns a string indicating how much help the therapist provided for the activity
 *
 * @param {string} client string to describe the patient
 * @param {string} assistLevel FIM level string
 * @returns {string} string describing assistance provided
 */
const assistBlurb = (client, assistLevel, verbalCues) => {
    const assistDict = {
        independent: `the ${client} completed the activity independently with ${verbalCues}`,
        "modified independent": `the ${client} completed the activity with modified independence  and ${verbalCues}`,
        supervision: `the therapist provided supervision and ${verbalCues} to the ${client} to safely complete the activity.`,
        "minimum assistance": `the therapist provided minimum assistance and ${verbalCues} to the ${client} to safely complete the activity.`,
        "moderate assistance": `the therapist provided moderate assistance and ${verbalCues} to the ${client} to safely complete the activity.`,
        "maximum assistance": `the therapist provided maximum assistance and ${verbalCues} to the ${client} to safely complete the activity.`,
        dependent: `the therapist provided total assistance and ${verbalCues} to the ${client} to safely complete the activity.`,
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
    // patient: "resident",
    // arm_bike_name: "",
    // goals: [],
    // impairments: [],
    // arm_bike_level: "",
    // arm_bike_time: "",
    // plan: "",
    // fim: "",
    // care: "",
    // verbal_cueing: "",
    // gross_motor_coordination: "",
    // fine_motor_coordination: "",
    // dynamic_sitting_balance: "",
    // static_sitting_balance: "",
    // blood_pressure: "",
    // heart_rate: "",
    // respiration_rate: "",
    // temperature: "",
    // saturation: "",
    const { patient, name, level, time } = req.body;

    const goals = makeCommaList(req.body.goals);
    const impairments = makeCommaList(req.body.impairments);

    const {
        fim,
        care,
        verbal_cueing,
        dynamic_sitting_balance,
        static_sitting_balance,
        gross_motor_coordination,
        fine_motor_coordination,
        blood_pressure,
        heart_rate,
        respiration_rate,
        saturation,
        temperature,
    } = req.body;
    
    const plan = makePlan(req.body.plan, req.body.patient, goals);

    const assistStr = assistBlurb(patient, req.body.fim, verbal_cueing);

    const assessmentsStr = makeAssessments(
        fim,
        care,
        dynamic_sitting_balance,
        static_sitting_balance,
        gross_motor_coordination,
        fine_motor_coordination
    );

    const vitalsStr = makeVitals(
        blood_pressure,
        heart_rate,
        respiration_rate,
        saturation,
        temperature
    );

    const armBikeStr = `In order to target the ${patient}'s ${goals} ${
        req.body.goals.length > 1 ? "goals" : "goal"
    }, the therapist instructed the ${patient} in safe completion of the ${name}
    to improve their ${impairments}. The therapist instructed the ${patient} to complete
    ${time} ${
        req.body.time > 1 ? "minutes" : "minute"
} and ${assistStr}. ${assessmentsStr}. ${vitalsStr}`;
    

    return res.json(armBikeStr);
};

module.exports = createArmBike;

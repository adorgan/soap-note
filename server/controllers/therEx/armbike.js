const makeCommaList = require("../../utils/makeCommaList");
const makePlan = require("../../utils/makePlan");
const makeAssessments = require("../../utils/makeAssessments");
const makeVitals = require("../../utils/makeVitals");
const makeFim = require("../../utils/makeFim");

/**
 * This returns a string indicating how much help the therapist provided for the activity
 *
 * @param {string} client string to describe the patient
 * @param {string} assistLevel FIM level string
 * @returns {string} string describing assistance provided
 */
const assistBlurb = (client, assistLevel, verbalCues) => {
  const assistDict = {
    independent: `The ${client} completed the activity independently with ${verbalCues} for the activity's`,
    "modified independent": `The ${client} completed the activity with modified independence and ${verbalCues} for the activity's`,
    supervision: `The therapist provided supervision and ${verbalCues} for the activity's`,
    "minimum assistance": `The therapist provided minimum assistance and ${verbalCues} for the activity's`,
    "moderate assistance": `The therapist provided moderate assistance and ${verbalCues} for the activity's`,
    "maximum assistance": `The therapist provided maximum assistance and ${verbalCues} for the activity's`,
    dependent: `The therapist provided total assistance and ${verbalCues} for the activity's`,
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
  // name: "",
  // position: "",
  // goals: [],
  // impairments: [],
  // level: "",
  // time: "",
  // physical_assistance: "",
  // verbal_cueing: "",
  // plan: "",
  // eating: "",
  // grooming: "",
  // upper_body_dressing: "",
  // lower_body_dressing: "",
  // toileting: "",
  // toilet_transfers: "",
  // tub_transfers: "",
  // care: "",
  // gross_motor_coordination: "",
  // fine_motor_coordination: "",
  // dynamic_sitting_balance: "",
  // static_sitting_balance: "",
  // blood_pressure: "",
  // heart_rate: "",
  // respiration_rate: "",
  // temperature: "",
  // saturation: "",

  const { patient, name, position, level, time, physical_assistance, plan } =
    req.body;

  const goals = makeCommaList(req.body.goals);
  const education = makeCommaList(req.body.education);

  // assessment data
  const {
    care,
    verbal_cueing,
    eating,
    grooming,
    upper_body_dressing,
    lower_body_dressing,
    toileting,
    toilet_transfers,
    tub_transfers,
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

  const planStr = makePlan(plan, name, patient, goals);

  const assistStr = assistBlurb(patient, physical_assistance, verbal_cueing);

  const fimStr = makeFim(
    eating,
    grooming,
    upper_body_dressing,
    lower_body_dressing,
    toileting,
    toilet_transfers,
    tub_transfers
  );

  const assessmentsStr = makeAssessments(
    fimStr,
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

  const armBikeStr = `In order to improve the ${patient}'s safety and independence with ${goals},
    the therapist instructed the ${patient} to complete the ${name} while ${position} for ${time} 
    minutes on level ${level}. ${assistStr} ${education}. ${planStr} ${assessmentsStr} ${vitalsStr}`;

  return res.json(armBikeStr);
};

module.exports = createArmBike;

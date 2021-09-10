const makeCommaList = require("../../utils/makeCommaList");
const makePlan = require("../../utils/makePlan");
const makeAssessments = require("../../utils/makeAssessments");
const makeVitals = require("../../utils/makeVitals");
const makeFim = require("../../utils/makeFim");
const makeAssist = require("../../utils/makeAssist");

/**
 * This creates a narrative summary of the arm bike and sends back in response
 * @param {Object} req
 * @param {Object} res
 * @returns {JSON} json-formatted response
 */
const createArmBike = (req, res) => {

  const { patient, name, position, level, time, physical_assistance, plan } =
    req.body;

  const goals = makeCommaList(req.body.goals);
  const education = makeCommaList(req.body.education);
  const verbal_cues_given = makeCommaList(req.body.verbal_cues_given);

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

  const assistStr = makeAssist(patient, physical_assistance, verbal_cueing);

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
    minutes on level ${level}. Prior the start of the activity, the therapist instructed the 
    ${patient} in the activity's ${education}.
    ${assistStr}${verbal_cues_given}. ${planStr} ${assessmentsStr} ${vitalsStr}`;

  return res.json(armBikeStr);
};

module.exports = createArmBike;

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

  const {
    // patient data
    patient,
    name,
    position,
    level,
    time,
    physical_assistance,
    plan,
    // assessment data
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
    // vitals data
    blood_pressure,
    heart_rate,
    respiration_rate,
    saturation,
    temperature,
  } = req.body;

  // inputs as arrays that need to be in a comma list format
  const goals = makeCommaList(req.body.goals);
  const education = makeCommaList(req.body.education);
  const verbal_cues_given = makeCommaList(req.body.verbal_cues_given);

  // plan blurb
  const planBlurb = makePlan(plan, name, patient, goals);

  // physical and verbal assistance blurb
  const assistBlurb = makeAssist(
    patient,
    physical_assistance,
    verbal_cueing,
    verbal_cues_given
  );

  // FIM blurb
  const fimBlurb = makeFim(
    eating,
    grooming,
    upper_body_dressing,
    lower_body_dressing,
    toileting,
    toilet_transfers,
    tub_transfers
  );

  // other assessments blurb
  const assessmentsBlurb = makeAssessments(
    fimBlurb,
    care,
    dynamic_sitting_balance,
    static_sitting_balance,
    gross_motor_coordination,
    fine_motor_coordination
  );

  // vitals blurb
  const vitalsBlurb = makeVitals(
    blood_pressure,
    heart_rate,
    respiration_rate,
    saturation,
    temperature
  );

  const armBikeBlurb = `In order to improve the ${patient}'s safety and independence with ${goals},
    the therapist instructed the ${patient} to complete the ${name} while ${position} for ${time} 
    minutes on level ${level}. Prior the start of the activity, the therapist instructed the 
    ${patient} in the activity's ${education}.
    ${assistBlurb} ${planBlurb} ${assessmentsBlurb} ${vitalsBlurb}`;

  return res.json(armBikeBlurb);
};

module.exports = createArmBike;

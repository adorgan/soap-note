const makeCommaList = require("../../utils/makeCommaList");
const makePlan = require("../../utils/makePlan");
const makeAssessments = require("../../utils/makeAssessments");
const makeVitals = require("../../utils/makeVitals");
const makeFim = require("../../utils/makeFim");
const makeAssist = require("../../utils/makeAssist");

const createToiletTransfer = (req, res) => {
  const {
    // patient data
    patient,
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


  const education = makeCommaList(req.body.education);
  const verbal_cues_given = makeCommaList(req.body.verbal_cues_given);
  const instruction = makeCommaList(req.body.instruction);
  const intervention = makeCommaList(req.body.intervention);

  // plan blurb
  const planBlurb = makePlan(plan, "toilet transfer training", patient, "toilet transfers");

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

  const blurb = `In order to improve safety and independence with toilet transfers,
              the therapist educated the ${patient} regarding the ${education}
              of toilet transfers. Next, the therapist utilized ${intervention} while
              providing instructions to ${instruction}. 
              ${assistBlurb} ${planBlurb} ${assessmentsBlurb} ${vitalsBlurb}`;

  return res.json(blurb);
};

module.exports = createToiletTransfer;

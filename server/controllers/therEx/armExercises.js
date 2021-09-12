const makeCommaList = require("../../utils/makeCommaList");
const makePlan = require("../../utils/makePlan");
const makeAssessments = require("../../utils/makeAssessments");
const makeVitals = require("../../utils/makeVitals");
const makeFim = require("../../utils/makeFim");
const makeAssist = require("../../utils/makeAssist");


const createArmExercises = (req, res) => {

  const {
    // activity
    patient,
    position,
    extremities,
    sets,
    reps,
    weight,
    exercise_band,
    physical_assistance,
    verbal_cueing,
    
    plan,
    // FIM
    eating,
    grooming,
    upper_body_dressing,
    lower_body_dressing,
    toileting,
    toilet_transfers,
    tub_transfers,
    // other assessments
    care,
    gross_motor_coordination,
    fine_motor_coordination,
    dynamic_sitting_balance,
    static_sitting_balance,
    // vitals
    blood_pressure,
    heart_rate,
    respiration_rate,
    temperature,
    saturation,
  } = req.body;

  const goals = makeCommaList(req.body.goals);
  const impairments = makeCommaList(req.body.impairments);
  const education = makeCommaList(req.body.education);
  const muscle_groups = makeCommaList(req.body.muscle_groups);
  const verbal_cues_given = makeCommaList(req.body.verbal_cues_given);

  // plan blurb
  const planBlurb = makePlan(plan, "arm exercises", patient, goals);

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


  const blurb = `In order to improve the ${patient}'s safety and independence with ${goals},
    the therapist instructed the ${patient} to complete ${extremities} strengthening
    exercises focusing on the ${muscle_groups} muscle groups to improve ${impairments}.
    Prior the start of the activity, the therapist instructed the 
    ${patient} in the activity's ${education}. The ${patient} completed ${sets} sets of
    ${reps} repetitions using ${weight} lb weights while in a ${position} position..
    ${assistBlurb} ${planBlurb} ${assessmentsBlurb} ${vitalsBlurb}`;

  return res.json(blurb);
};

module.exports = createArmExercises;

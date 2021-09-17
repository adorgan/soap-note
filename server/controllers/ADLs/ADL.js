const makeBathingBlurb = require("../../utils/ADL/makeBathingBlurb");
const makeEatingBlurb = require("../../utils/ADL/makeEatingBlurb");
const makeGroomingBlurb = require("../../utils/ADL/makeGroomingBlurb");
const makeLowerDressingBlurb = require("../../utils/ADL/makeLowerDressing");
const makeToiletingBlurb = require("../../utils/ADL/makeToiletingBlurb");
const makeUpperDressingBlurb = require("../../utils/ADL/makeUpperDressingBlurb");
const makeList = require("../../utils/makeCommaList");

const makeADL = (req, res) => {
  //   eating
  const { eating_position, eating_location, eating_fim, eating_verbal_cueing } =
    req.body;

  const eating_tasks = makeList(req.body.eating_tasks);
  const eating_education = makeList(req.body.eating_education);
  const eating_instruction = makeList(req.body.eating_instruction);
  const eating_interventions = makeList(req.body.eating_interventions);
  const eating_adaptive_equipment = makeList(
    req.body.eating_adaptive_equipment
  );

  const eatingBlurb = makeEatingBlurb(
    eating_position,
    eating_location,
    eating_fim,
    eating_verbal_cueing,
    eating_tasks,
    eating_education,
    eating_instruction,
    eating_interventions,
    eating_adaptive_equipment
  );

  //   grooming
  const {
    grooming_position,
    grooming_location,
    grooming_fim,
    grooming_verbal_cueing,
  } = req.body;

  grooming_tasks = makeList(req.body.grooming_tasks);
  grooming_education = makeList(req.body.grooming_education);
  grooming_instruction = makeList(req.body.grooming_instruction);
  grooming_interventions = makeList(req.body.grooming_interventions);
  //   grooming_adaptive_equipment = makeList(req.body.grooming_adaptive_equipment);

  const groomingBlurb = makeGroomingBlurb(
    grooming_position,
    grooming_location,
    grooming_fim,
    grooming_verbal_cueing,
    grooming_tasks,
    grooming_education,
    grooming_instruction,
    grooming_interventions
    // grooming_adaptive_equipment
  );

  //   bathing
  const {
    bathing_position,
    bathing_location,
    bathing_fim,
    bathing_verbal_cueing,
  } = req.body;

  const bathing_tasks = makeList(req.body.bathing_tasks);
  const bathing_education = makeList(req.body.bathing_education);
  const bathing_instruction = makeList(req.body.bathing_instruction);
  const bathing_interventions = makeList(req.body.bathing_interventions);
  const bathing_adaptive_equipment = makeList(
    req.body.bathing_adaptive_equipment
  );

  const bathingBlurb = makeBathingBlurb(
    bathing_position,
    bathing_location,
    bathing_fim,
    bathing_verbal_cueing,
    bathing_tasks,
    bathing_education,
    bathing_instruction,
    bathing_interventions,
    bathing_adaptive_equipment
  );

  // Upper body dressing
  const {
    upper_dressing_position,
    upper_dressing_location,
    upper_dressing_fim,
    upper_dressing_verbal_cueing,
  } = req.body;

  const upper_dressing_tasks = makeList(req.body.upper_dressing_tasks);
  const upper_dressing_education = makeList(req.body.upper_dressing_education);
  const upper_dressing_instruction = makeList(
    req.body.upper_dressing_instruction
  );
  const upper_dressing_interventions = makeList(
    req.body.upper_dressing_interventions
  );
  const upper_dressing_adaptive_equipment = makeList(
    req.body.upper_dressing_adaptive_equipment
  );

  const upperDressingBlurb = makeUpperDressingBlurb(
    upper_dressing_position,
    upper_dressing_location,
    upper_dressing_fim,
    upper_dressing_verbal_cueing,
    upper_dressing_tasks,
    upper_dressing_education,
    upper_dressing_instruction,
    upper_dressing_interventions,
    upper_dressing_adaptive_equipment
  );

  // Lower body dressing
  const {
    lower_dressing_position,
    lower_dressing_location,
    lower_dressing_fim,
    lower_dressing_verbal_cueing,
  } = req.body;

  const lower_dressing_tasks = makeList(req.body.lower_dressing_tasks);
  const lower_dressing_education = makeList(req.body.lower_dressing_education);
  const lower_dressing_instruction = makeList(
    req.body.lower_dressing_instruction
  );
  const lower_dressing_interventions = makeList(
    req.body.lower_dressing_interventions
  );
  const lower_dressing_adaptive_equipment = makeList(
    req.body.lower_dressing_adaptive_equipment
  );

  const lowerDressingBlurb = makeLowerDressingBlurb(
    lower_dressing_position,
    lower_dressing_location,
    lower_dressing_fim,
    lower_dressing_verbal_cueing,
    lower_dressing_tasks,
    lower_dressing_education,
    lower_dressing_instruction,
    lower_dressing_interventions,
    lower_dressing_adaptive_equipment
  );

  // Toileting
  const {
    toileting_position,
    toileting_location,
    toileting_fim,
    toileting_verbal_cueing,
  } = req.body;

  const toileting_tasks = makeList(req.body.toileting_tasks);
  const toileting_education = makeList(req.body.toileting_education);
  const toileting_instruction = makeList(req.body.toileting_instruction);
  const toileting_interventions = makeList(req.body.toileting_interventions);
  const toileting_adaptive_equipment = makeList(
    req.body.toileting_adaptive_equipment
  );

  const toiletingBlurb = makeToiletingBlurb(
    toileting_position,
    toileting_location,
    toileting_fim,
    toileting_verbal_cueing,
    toileting_tasks,
    toileting_education,
    toileting_instruction,
    toileting_interventions,
    toileting_adaptive_equipment
  );

  return res.json(
    `${eatingBlurb} 
     ${groomingBlurb} 
     ${bathingBlurb} 
     ${upperDressingBlurb} 
     ${lowerDressingBlurb} 
     ${toiletingBlurb}`
  );
};

module.exports = makeADL;

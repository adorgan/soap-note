const makeCommaList = require("../../utils/makeCommaList");
const makePlan = require("../../utils/makePlan");
const makeAssessments = require("../../utils/makeAssessments");
const makeVitals = require("../../utils/makeVitals");
const makeFim = require("../../utils/makeFim");
const makeAssist = require("../../utils/makeAssist");
const makeToiletTransfer = require("../../utils/FunctionalMobility/makeToiletTransfer");

const createToiletTransfer = (req, res) => {
  // Toilet transfers
  const { location, fim, verbal_cueing } = req.body;

  const tasks = makeCommaList(req.body.tasks);
  const aids = makeCommaList(req.body.aids);
  const education = makeCommaList(req.body.education);
  const instruction = makeCommaList(req.body.instruction);
  const interventions = makeCommaList(req.body.interventions);

  const toiletTransferBlurb = makeToiletTransfer(
    location,
    tasks,
    aids,
    education,
    instruction,
    interventions,
    fim,
    verbal_cueing
  );

  return res.json(` ${toiletTransferBlurb}`);
};

module.exports = createToiletTransfer;

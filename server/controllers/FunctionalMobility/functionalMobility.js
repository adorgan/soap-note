const makeToiletTransfer = require("../../utils/FunctionalMobility/makeToiletTransfer");
const makeTubTransfer = require("../../utils/FunctionalMobility/makeTubTransfer");
const makeList = require("../../utils/makeCommaList");

const makeFunctionalMobilityBlurb = (req, res) => {
    // Toilet transfers
    const {
        toilet_transfer_location,
        toilet_transfer_fim,
        toilet_transfer_verbal_cueing,
    } = req.body;

    const toilet_transfer_tasks = makeList(req.body.toilet_transfer_tasks);
    const toilet_transfer_aids = makeList(req.body.toilet_transfer_aids);
    const toilet_transfer_education = makeList(
        req.body.toilet_transfer_education
    );
    const toilet_transfer_instruction = makeList(
        req.body.toilet_transfer_instruction
    );
    const toilet_transfer_interventions = makeList(
        req.body.toilet_transfer_interventions
    );
    const toilet_transfer_adaptive_equipment = makeList(
        req.body.toilet_transfer_adaptive_equipment
    );

    const toiletTransferBlurb = makeToiletTransfer(
        toilet_transfer_location,
        toilet_transfer_tasks,
        toilet_transfer_aids,
        toilet_transfer_education,
        toilet_transfer_instruction,
        toilet_transfer_interventions,
        toilet_transfer_adaptive_equipment,
        toilet_transfer_fim,
        toilet_transfer_verbal_cueing
    );

    // Tub transfers
    const {
        tub_transfer_location,
        tub_transfer_fim,
        tub_transfer_verbal_cueing,
    } = req.body;

    const tub_transfer_tasks = makeList(req.body.tub_transfer_tasks);
    const tub_transfer_aids = makeList(req.body.tub_transfer_aids);
    const tub_transfer_education = makeList(
        req.body.tub_transfer_education
    );
    const tub_transfer_instruction = makeList(
        req.body.tub_transfer_instruction
    );
    const tub_transfer_interventions = makeList(
        req.body.tub_transfer_interventions
    );
    const tub_transfer_adaptive_equipment = makeList(
        req.body.tub_transfer_adaptive_equipment
    );

    const tubTransferBurb = makeTubTransfer(
        tub_transfer_location,
        tub_transfer_tasks,
        tub_transfer_aids,
        tub_transfer_education,
        tub_transfer_instruction,
        tub_transfer_interventions,
        tub_transfer_adaptive_equipment,
        tub_transfer_fim,
        tub_transfer_verbal_cueing
    );

    return res.json(`${toiletTransferBlurb} ${tubTransferBurb}`);
};

module.exports = makeFunctionalMobilityBlurb;

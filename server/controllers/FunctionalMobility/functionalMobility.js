const makeToiletTransfer = require("../../utils/FunctionalMobility/makeToiletTransfer");
const makeList = require("../../utils/makeCommaList");

const makeFunctionalMobilityBlurb = (req, res) => {
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

    return res.json(toiletTransferBlurb);
};

module.exports = makeFunctionalMobilityBlurb;

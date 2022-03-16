const makeDynamicBalance = require("../../utils/Balance/makeDynamicBalance");
const makeStaticBalance = require("../../utils/Balance/makeStaticBalance");
const makeList = require("../../utils/makeCommaList");

const makeBalance = (req, res) => {
    console.log(req.body);
    // Dynamic Balance
    const {
        patient,
        position,
        support,
        duration,
        LOB,
        fim,
        verbal_cueing,
    } = req.body;

    const goals = makeList(req.body.goals);
    const tasks = makeList(req.body.tasks);
    const education = makeList(
        req.body.education
    );
    const instruction = makeList(
        req.body.instruction
    );
    const interventions = makeList(
        req.body.interventions
    );

    const dynamicBalanceBlurb = makeDynamicBalance(
        patient,
        goals,
        position,
        support,
        duration,
        LOB,
        tasks,
        education,
        instruction,
        interventions,
        fim,
        verbal_cueing
    );

    // Static Balance
    // const {
    //     patient,
    //     position,
    //     support,
    //     duration,
    //     LOB,
    //     fim,
    //     verbal_cueing,
    // } = req.body;

    // const goals = makeList(req.body.goals);
    // const tasks = makeList(req.body.tasks);
    // const education = makeList(
    //     req.body.education
    // );
    // const instruction = makeList(
    //     req.body.instruction
    // );
    // const interventions = makeList(
    //     req.body.interventions
    // );

    // const staticBalanceBlurb = makeStaticBalance(
    //     patient,
    //     goals,
    //     position,
    //     support,
    //     duration,
    //     LOB,
    //     tasks,
    //     education,
    //     instruction,
    //     interventions,
    //     fim,
    //     verbal_cueing
    // );

    return res.json(`${dynamicBalanceBlurb}`);
};

module.exports = makeBalance;

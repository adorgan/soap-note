const makeDynamicBalance = require("../../utils/Balance/makeDynamicBalance");
const makeStaticBalance = require("../../utils/Balance/makeStaticBalance");
const makeList = require("../../utils/makeCommaList");

const makeBalance = (req, res) => {
    console.log(req.body);
    // Dynamic Balance
    const {
        dynamic_balance_patient,
        dynamic_balance_position,
        dynamic_balance_support,
        dynamic_balance_duration,
        dynamic_balance_LOB,
        dynamic_balance_fim,
        dynamic_balance_verbal_cueing,
    } = req.body;

    const dynamic_balance_goals = makeList(req.body.dynamic_balance_goals);
    const dynamic_balance_tasks = makeList(req.body.dynamic_balance_tasks);
    const dynamic_balance_education = makeList(
        req.body.dynamic_balance_education
    );
    const dynamic_balance_instruction = makeList(
        req.body.dynamic_balance_instruction
    );
    const dynamic_balance_interventions = makeList(
        req.body.dynamic_balance_interventions
    );

    const dynamicBalanceBlurb = makeDynamicBalance(
        dynamic_balance_patient,
        dynamic_balance_goals,
        dynamic_balance_position,
        dynamic_balance_support,
        dynamic_balance_duration,
        dynamic_balance_LOB,
        dynamic_balance_tasks,
        dynamic_balance_education,
        dynamic_balance_instruction,
        dynamic_balance_interventions,
        dynamic_balance_fim,
        dynamic_balance_verbal_cueing
    );

    // Static Balance
    const {
        static_balance_patient,
        static_balance_position,
        static_balance_support,
        static_balance_duration,
        static_balance_LOB,
        static_balance_fim,
        static_balance_verbal_cueing,
    } = req.body;

    const static_balance_goals = makeList(req.body.static_balance_goals);
    const static_balance_tasks = makeList(req.body.static_balance_tasks);
    const static_balance_education = makeList(
        req.body.static_balance_education
    );
    const static_balance_instruction = makeList(
        req.body.static_balance_instruction
    );
    const static_balance_interventions = makeList(
        req.body.static_balance_interventions
    );

    const staticBalanceBlurb = makeStaticBalance(
        static_balance_patient,
        static_balance_goals,
        static_balance_position,
        static_balance_support,
        static_balance_duration,
        static_balance_LOB,
        static_balance_tasks,
        static_balance_education,
        static_balance_instruction,
        static_balance_interventions,
        static_balance_fim,
        static_balance_verbal_cueing
    );

    return res.json(`${dynamicBalanceBlurb} ${staticBalanceBlurb}`);
};

module.exports = makeBalance;

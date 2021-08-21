const makeCommaList = require("../../utils/makeCommaList");

const createHemiDressing = (req, res) => {
    // patient: "",
    // extremity: "",
    // education: [],
    // instruction: [],
    // interventions: [],
    // fim: "",
    // care: "",
    // dynamic_sitting_balance: "",
    // static_sitting_balance: "",

    const patient = req.body.patient;
    const extremity = req.body.extremity;
    const education = makeCommaList(req.body.education);
    const instruction = makeCommaList(req.body.instruction);
    const interventions = makeCommaList(req.body.interventions);
    const fim = req.body.fim;
    const care = req.body.care;
    const dynamicSittingBalance = req.body.dynamic_sitting_balance;
    const staticSittingBalance = req.body.static_sitting_balance;
    let assessments = "";

    if (fim !== "") {
        assessments = `Functional Independence Measure: ${fim}; `;
    }
    if (care !== "") {
        assessments += `CARE: ${care}; `;
    }
    if (dynamicSittingBalance !== "") {
        assessments += `Dynamic sitting balance grade: ${dynamicSittingBalance}; `;
    }
    if (staticSittingBalance !== "") {
        assessments += `Static sitting balance grade: ${staticSittingBalance}; `;
    }

    const blurb = `In order to improve the ${patient}'s safety and independence
                    with upper body dressing, the therapist instructed the ${patient}
                    in ${extremity} hemi-dressing techniques. Prior to the activity, the therapist
                    educated the ${patient} in the ${education} of hemi-dressing. Next,
                    the therapist instructed the ${patient} in ${instruction} while utilizing
                    ${interventions} to maximize the ${patient}'s independence with the task.
                    ${assessments} The ${patient} will continue to benefit from adaptive
                    dressing strategies to maximize their functional independence.`;

    return res.json(blurb);
};

module.exports = createHemiDressing;

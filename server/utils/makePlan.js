const makePlan = (plan, activity, client, goals) => {
    let planStatement = "";
    switch (plan) {
        case "upgrade":
            planStatement = `The ${client} tolerated the ${activity} well and would benefit
            from increasing the challenge, duration, or intensity in future treatments to
            best maximize their potential for achieving their ${goals} goals.`;
            break;

        case "downgrade":
            planStatement = `The ${client} tolerated the ${activity} poorly and would benefit
            from decreasing the challenge, duration, or intensity in future treatments to
            best maximize their potential for achieving their ${goals} goals.`;
            break;

        case "maintain":
            planStatement = `The ${client} tolerated the ${activity} adequately but would benefit
            from modifying the challenge, duration, or intensity in future treatments to
            best maximize their potential for achieving their ${goals} goals.`;
            break;

        default:
            planStatement = "error";
            break;
    }

    return planStatement;
};

module.exports = makePlan;
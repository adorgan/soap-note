const makePlan = (plan, client, goals) => {
    let planStatement = "";
    switch (plan) {
        case "upgrade":
            planStatement = `Based on the ${client}'s positive response to this treatment 
            intervention, future sessions will upgrade the challenge to better meet their 
            needs and maximize their potential to achieve ${goals} goals.`;
            break;

        case "downgrade":
            planStatement = `Based on the ${client}'s difficult response to this treatment 
            intervention, future sessions will downgrade the challenge to better meet their 
            needs and maximize their potential to achieve ${goals} goals.`;
            break;

        case "maintain":
            planStatement = `Based on the ${client}'s satisfactory response to this treatment 
            intervention, future sessions will maintain the challenge to best meet their 
            needs and maximize their potential to achieve ${goals} goals.`;
            break;

        default:
            planStatement = "error";
            break;
    }

    return planStatement;
};

module.exports = makePlan;
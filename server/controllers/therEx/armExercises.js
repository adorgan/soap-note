const makeCommaList = require("../../utils/makeCommaList");

const makePlan = (plan, client, goals) => {
    console.log(plan);
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

const createArmExercises = (req, res) => {
    const receiver = req.body.patient;      // healthcare receiver term
    const goals = makeCommaList(req.body.goals);
    const impairments = makeCommaList(req.body.impairments);
    const extremities = req.body.extremities;
    const muscleGroups = makeCommaList(req.body.muscle_groups);
    const sets = req.body.sets;
    const reps = req.body.reps;
    const weight = req.body.weight;
    const verbalCueing = req.body.verbal_cueing;
    const plan = makePlan(req.body.plan, receiver, goals);

    const narrative = `In order to improve the ${receiver}'s ${impairments}
                    for greater safety and independence ${goals}, the therapist 
                    instructed the ${receiver} in ${extremities} arm exercises. 
                    The therapist provided ${verbalCueing} for the ${receiver} 
                    to safely complete ${sets} sets of ${reps} reps using ${weight} lb. 
                    weights focusing on the ${muscleGroups} muscle groups. ${plan}`;

    return res.json(narrative);

};

module.exports = createArmExercises;
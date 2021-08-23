const makeCommaList = require("../../utils/makeCommaList");

const createGrooming = (req, res) => {
    //  patient: "",
    // position: "",
    // location: "",
    // grooming_tasks: [],
    // education: [],
    // instruction: [],
    // interventions: [],
    // fim: "",
    // care: "",
    // gross_motor_coordination: "",
    // fine_motor_coordination: "",
    // dynamic_sitting_balance: "",
    // static_sitting_balance: "",
    console.log(req.body);

    const patient = req.body.patient;
    const position = req.body.position;
    const location = req.body.location;
    const groomingTasks = makeCommaList(req.body.grooming_tasks);
    const education = makeCommaList(req.body.education);
    const instruction = makeCommaList(req.body.instruction);
    const interventions = makeCommaList(req.body.interventions);
    const fim = req.body.fim;
    const care = req.body.care;
    const dynamicSittingBalance = req.body.dynamic_sitting_balance;
    const staticSittingBalance = req.body.static_sitting_balance;
    const grossMotorCoordination = req.body.gross_motor_coordination;
    const fineMotorCoordination = req.body.fine_motor_coordination;

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
    if (grossMotorCoordination !== "") {
        assessments += `Gross motor coordination grade: ${grossMotorCoordination}; `;
    }
    if (fineMotorCoordination !== "") {
        assessments += `Fine motor coordination grade: ${fineMotorCoordination}; `;
    }
    if (assessments !== "") {
        assessments = `Assessments: ${assessments}`;
    }

    const blurb = `In order to improve the ${patient}'s safety and independence
                    with grooming, the therapist instructed the ${patient}
                    in safe completion of ${groomingTasks} while the ${patient} was ${position} in the ${location}. Prior to the activity, the therapist
                    educated the ${patient} in the ${education} of grooming tasks. 
                    Next, the therapist instructed the ${patient} in ${instruction} while utilizing
                    ${interventions} to maximize the ${patient}'s independence with the task.The
                    therapist provided ${fim} for the ${patient} to complete all grooming tasks.
                    ${assessments} The ${patient} will continue to benefit from focusing on ${instruction}
                    to maximize their functional independence.`;

    return res.json(blurb);

};

module.exports = createGrooming;

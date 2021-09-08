const makeAssessments = (
    fim,
    care,
    dynamicSittingBalance,
    staticSittingBalance,
    grossMotorCoordination,
    fineMotorCoordination
) => {
    let assessments = "";

    if (fim !== "") {
        assessments = `FIM: ${fim}; `;
    }
    if (care !== "") {
        assessments += `CARE: ${care}; `;
    }
    if (dynamicSittingBalance !== "") {
        assessments += `dynamic sitting balance grade: ${dynamicSittingBalance}; `;
    }
    if (staticSittingBalance !== "") {
        assessments += `static sitting balance grade: ${staticSittingBalance}; `;
    }
    if (grossMotorCoordination !== "") {
        assessments += `gross motor coordination grade: ${grossMotorCoordination}; `;
    }
    if (fineMotorCoordination !== "") {
        assessments += `fine motor coordination grade: ${fineMotorCoordination}; `;
    }
    if (assessments !== "") {
        assessments = `Standardized assessments: ${assessments}`;
    }

    return assessments;
};

module.exports = makeAssessments;

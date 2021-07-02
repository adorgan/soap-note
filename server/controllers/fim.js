const createArmBike = require("./therEx/armbike");

//helper function for adding fim score array
const addFim = (total, num) => {
    return total + num;
};

//calculates fim score and blurb
const createFim = (req, res) => {
    fimScoring = {
        independent: 7,
        "modified independent": 6,
        supervision: 5,
        "minimum assistance": 4,
        "moderate assistance": 3,
        "maximum assistance": 2,
        dependent: 1,
    };

    adlCategories = [
        "feeding",
        "grooming",
        "bathing",
        "upper body dressing",
        "lower body dressing",
        "toileting",
        "toilet transfer",
        "tub transfer",
    ];

    //create array of all ADL FIM scores to calculate total and % impaired
    const fimScoreArr = [];
    Object.values(req.body).forEach((val) => {
        fimScoreArr.push(fimScoring[val]);
    });
    const totalFimScore = fimScoreArr.reduce(addFim);

    //build string of ADL and fim scores with total score
    let fimString = "Functional Independence Measure: ";
    for (let i = 0; i < adlCategories.length; i++) {
        fimString += `${adlCategories[i]} = ${Object.values(req.body)[i]}; `;
    }
    fimString += `total score: ${totalFimScore}/56.`;

    //return final string
    res.json(fimString);
};

module.exports = createFim;
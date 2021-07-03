const fimScoring = require("../utils/fimScoring");
const adlCategories = require("../utils/adlCategories");
//helper function for adding fim score array
const addFim = (total, num) => {
    return total + num;
};

//calculates fim score and blurb
const createFim = (req, res) => {

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
const fimScoring = require("../utils/fimScoring");
const adlCategories = require("../utils/adlCategories");


//helper function for adding fim score array
const addFim = (total, num) => {
    return total + num;
};


/**
 * Creates a FIM score summary
 * @param {Object} req 
 * @param {Object} res 
 * @returns {JSON} FIM score summary response
 */
const createFim = (req, res) => {

    //create array of all ADL FIM scores to calculate total and % impaired
    const fimScoreArr = [];
    Object.values(req.body).forEach((val) => {
        fimScoreArr.push(fimScoring[val]);
    });
    console.log(fimScoreArr);
    const totalFimScore = fimScoreArr.reduce(addFim);

    //build string of ADL and fim scores with total score
    let fimString = "Functional Independence Measure: ";
    for (let i = 0; i < adlCategories.length; i++) {
        fimString += `${adlCategories[i]} = ${Object.values(req.body)[i]}; `;
    }
    fimString += `total score: ${totalFimScore}/56.`;

    //return final string
    return res.json(fimString);
};

module.exports = createFim;
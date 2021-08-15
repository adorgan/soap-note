const Impairment = require("../models/impairments");

const getImpairments = (req,res) => {
    Impairment.find({}, (err, allImpairments) => {
        if (err) {
            console.log(err);
        } else {
            const impairmentsArr = allImpairments.map(impairment => impairment.impairment);
            return res.json(impairmentsArr);
        }
    });
}

module.exports = getImpairments;
const makeCommaList = require("../utils/makeCommaList");

const makeVitals = (bp, hr, o2, rr, temp) => {
    let vitalsArr = [];
    if (bp !== "") {
        vitalsArr.push(`blood pressure: ${bp}`);
    }
    if (hr !== "") {
        vitalsArr.push(`heart rate: ${hr} beats/min`);
    }
    if (o2 !== "") {
        vitalsArr.push(`oxygen saturation: ${o2}%`);
    }
    if (rr !== "") {
        vitalsArr.push(`respiration rate: ${rr} respirations/min`);
    }
    if (temp !== "") {
        vitalsArr.push(`temperature: ${temp}° F`);
    }

    if (vitalsArr.length === 0) {
        return "";
    }

    return `Vitals: ${makeCommaList(vitalsArr)}.`;
};

module.exports = makeVitals;

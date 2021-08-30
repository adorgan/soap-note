const makeCommaList = require("../../utils/makeCommaList");

const makeVitals = (bp, hr, o2, rr, temp)=>{
    let vitalsArr = [];
    if (bp !== ""){
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

    if (vitalsArr.length === 0){
        return ""
    }

    return `Vitals: ${makeCommaList(vitalsArr)}.`;

}

const createToiletTransfer = (req, res) => {
    const patient = req.body.patient;
    const education = makeCommaList(req.body.education);
    const instruction = makeCommaList(req.body.instruction);
    const interventions = makeCommaList(req.body.intervention);
    const {
        fim,
        care,
        verbal_cueing,
        dynamicSittingBalance,
        staticSittingBalance,
        grossMotorCoordination,
        fineMotorCoordination,
    } = req.body;

    const vitals = makeVitals(req.body.blood_pressure, req.body.heart_rate, req.body.saturation, req.body.respiration_rate, req.body.temperature);

    let verbalCueingBlurb = "";
    if(verbal_cueing !== ""){
        verbalCueingBlurb = `and ${verbal_cueing}`;
    }
   
    const blurb = `In order to improve safety and independence with toilet transfers, 
                the therapist first educated the ${patient} regarding the ${education} 
                of toilet transfers. Next, the therapist instructed the ${patient} to 
                ${instruction} to maximize safety. The therapist utilized ${interventions}
                to help the ${patient} better complete the task. The therapist provided
                ${fim} ${verbalCueingBlurb} for the ${patient} to transfer on/off the toilet.
                ${vitals}`
    
    return res.json(blurb);
};

module.exports = createToiletTransfer;

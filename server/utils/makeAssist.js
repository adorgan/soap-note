/**
 * This returns a string indicating how much help the therapist provided for the activity
 *
 * @param {string} client string to describe the patient
 * @param {string} assistLevel FIM level string
 * @returns {string} string describing assistance provided
 */
 const makeAssist = (client, assistLevel, verbalCues) => {
    let verbalCuePhrase = "";
    if(verbalCues === "no verbal cueing"){
      verbalCuePhrase = `${verbalCues} throughout`;
    }
    else{
      verbalCuePhrase = `${verbalCues} for `;
    }
    const assistDict = {
      independent: `The ${client} completed the activity independently with ${verbalCuePhrase}`,
      "modified independent": `The ${client} completed the activity with modified independence and ${verbalCuePhrase}`,
      supervision: `The therapist provided supervision and ${verbalCuePhrase}`,
      "minimum assistance": `The therapist provided minimum assistance and ${verbalCuePhrase}`,
      "moderate assistance": `The therapist provided moderate assistance and ${verbalCuePhrase}`,
      "maximum assistance": `The therapist provided maximum assistance and ${verbalCuePhrase}`,
      dependent: `The therapist provided total assistance and ${verbalCuePhrase}`,
    };
  
    return assistDict[assistLevel];
  };

  module.exports = makeAssist;
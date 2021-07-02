const makeList = (arr) => {
    let listStr = "";
    if (arr.length === 1) {
        listStr = arr[0];
    } else if (arr.length === 2) {
        listStr = `${arr[0]} and ${arr[1]}`;
    } else {
        var len = arr.length;
        for (let i = 0; i < len - 1; i++) {
            listStr += `${arr[i]}, `;
        }
        listStr += `and ${arr[len - 1]}`;
    }
    return listStr;
};

const assistBlurb = (client, assistLevel) => {
    const assistDict = {
        independent: "The " + client + " completed the activity independently.",
        "modified independent":
            "The " +
            client +
            " completed the activity with modified independence.",
        supervision:
            "The therapist provided supervision to the resident to safely complete the activity.",
        "minimum assistance":
            "The therapist provided minimal assistance to the resident to safely complete the activity.",
        "moderate assistance":
            "The therapist provided moderate assistance to the resident to safely complete the activity.",
        "maximum assistance":
            "The therapist provided maximum assistance to the resident to safely complete the activity.",
        dependent:
            "The therapist provided total assistance to the resident to safely complete the activity.",
    };

    return assistDict[assistLevel];
};

const createArmBike = (req, res) => {
    const goalStr = makeList(req.body.goals);
    const impairmentStr = makeList(req.body.impairments);
    const assistStr = assistBlurb("resident", req.body.fim_arm_bike);

    const armBikeStr = `In order to improve the resident's ${impairmentStr} 
    for greater safety and independence with ${goalStr}, the therapist instructed the 
    res in safe completion of the arm bike. The resident completed ${req.body.arm_bike_time} minutes on level 
    ${req.body.arm_bike_level}. ${assistStr} The resident tolerated the activity well with minimal 
    rest breaks and denied pain with activity. The resident will continue to benefit 
    from BUE strengthening and gross motor activities to maximize their independence 
    with ADLs prior to discharge.`;

    res.json(armBikeStr);
}

module.exports = createArmBike;
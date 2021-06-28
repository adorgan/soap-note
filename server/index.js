require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
// const db = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.oj90x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(db);
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

//helper function for adding fim score array
const addFim = (total, num) => {
    return total + num;
};

//calculates fim score and blurb
app.post("/fim", (req, res) => {
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
    fimScoreArr = [];
    Object.values(req.body).forEach((val) => {
        fimScoreArr.push(fimScoring[val]);
    });
    let totalFimScore = fimScoreArr.reduce(addFim);

    //build string of ADL and fim scores with total score
    let fimString = "Functional Independence Measure: ";
    for (let i = 0; i < adlCategories.length; i++) {
        fimString += `${adlCategories[i]} = ${Object.values(req.body)[i]}; `;
    }
    fimString += `total score: ${totalFimScore}/56.`;

    //return final string
    res.json(fimString);
});

const makeList = (arr) => {
    listStr = "";
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
    assistDict = {
        "independent": "The " + client + " completed the activity independently.",
        "modified independent":
            "The " + client + " completed the activity with modified independence.",
        "supervision":
            "The therapist provided supervision to the resident to safely complete the activity.",
        "minimum assistance":
            "The therapist provided minimal assistance to the resident to safely complete the activity.",
        "moderate assistance":
            "The therapist provided moderate assistance to the resident to safely complete the activity.",
        "maximum assistance":
            "The therapist provided maximum assistance to the resident to safely complete the activity.",
        "dependent":
            "The therapist provided total assistance to the resident to safely complete the activity.",
    };

    return assistDict[assistLevel];
};

app.post("/arm-bike", (req, res) => {
    var goalStr = makeList(req.body.goals);
    var impairmentStr = makeList(req.body.impairments);
    var assistStr = assistBlurb('resident', req.body.fim_arm_bike);

    var armBikeStr = `In order to improve the resident's ${impairmentStr} 
    for greater safety and independence with ${goalStr}, the therapist instructed the 
    res in safe completion of the arm bike. The resident completed ${req.body.arm_bike_time} minutes on level 
    ${req.body.arm_bike_level}. ${assistStr} The resident tolerated the activity well with minimal 
    rest breaks and denied pain with activity. The resident will continue to benefit 
    from BUE strengthening and gross motor activities to maximize their independence 
    with ADLs prior to discharge.`;

    res.json(armBikeStr);
});


//serve static assets if in production
if (process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));

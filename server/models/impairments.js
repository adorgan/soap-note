const mongoose = require("mongoose");

var impairmentSchema = new mongoose.Schema({
    impairment: String,
});

module.exports = mongoose.model("Impairment", impairmentSchema);

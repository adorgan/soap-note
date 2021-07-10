const mongoose = require("mongoose");

var noteSchema = new mongoose.Schema({
    title: String,
    body: String,
});

module.exports = mongoose.model("Note", noteSchema);
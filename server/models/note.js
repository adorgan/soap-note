const mongoose = require("mongoose");

var noteSchema = new mongoose.Schema({
    title: String,
    note: String,
});

module.exports = mongoose.model("Note", noteSchema);
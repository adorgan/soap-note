const Note = require("../models/note");

const addNote = (req, res) => {
    Note.create(req.body, (err, newNote) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(newNote);
        }
    });

    // console.log(req.body);
};

module.exports = addNote;

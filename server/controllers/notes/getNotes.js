const Note = require("../../models/note");

const getNotes = (req, res) => {
    Note.find({}, (err, allNotes) => {
        if (err) {
            console.log(err);
        } else {
            return res.json(allNotes);
        }
    });

    // console.log(req.body);
};

module.exports = getNotes;

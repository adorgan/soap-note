const Note = require("../../models/note");

const saveNote = (req, res) => {
    console.log(req.body.id);
    console.log(req.body.body);
    Note.updateOne({ _id: req.body.id }, { body: req.body.body}, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log("updated");
            res.send(result);
        }
    });
};

module.exports = saveNote;

const Note = require("../../models/note");
const User = require("../../models/User");

const addNote = (req, res) => {
  Note.create(req.body, (err, newNote) => {
    if (err) {
      console.log(err);
    } else {
      let doc = User.findOne({ email: req.session.user }, (err, docs) => {
        if (err) {
          console.log(err);
        } else {
          docs.notes.push(newNote.id);
          docs.save();
        }
      });

      return res.json(newNote);
    }
  });
};

module.exports = addNote;

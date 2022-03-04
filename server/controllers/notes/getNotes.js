const Note = require("../../models/note");
const User = require("../../models/User");

const getNotes = async (req, res) => {
    let noteIds = [];
    await User.findOne({email: req.session.user}, (err, user) => {
        if (err){
            console.log(err);
        }
        else {
            noteIds = user.notes;
        }
    })


    // Note.find({}, (err, allNotes) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         return res.json(allNotes);
    //     }
    // });

    Note.find().where('_id').in(noteIds).exec((err, allNotes) => {
        if(err){
            console.log(err);
        }
        else{
            return res.json(allNotes);
        }
    })

};

module.exports = getNotes;

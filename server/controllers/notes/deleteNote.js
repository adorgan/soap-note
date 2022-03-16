const Note = require("../../models/note");

const deleteNote = (req, res) => {

    Note.deleteOne({_id: req.body.id}, function(err, result){
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
};

module.exports = deleteNote;

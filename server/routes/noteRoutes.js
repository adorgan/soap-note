const express = require("express");
const addNote = require("../controllers/notes/addNote");
const getNotes = require("../controllers/notes/getNotes");
const deleteNote = require("../controllers/notes/deleteNote")

const router = express.Router();

router.post("/add-note", addNote);
router.get("/get-notes", getNotes);
router.post("/delete-note", deleteNote);

module.exports = router;

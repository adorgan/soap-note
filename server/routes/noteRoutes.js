const express = require("express");
const addNote = require("../controllers/notes/addNote");
const getNotes = require("../controllers/notes/getNotes");
const deleteNote = require("../controllers/notes/deleteNote");
const saveNote = require("../controllers/notes/saveNote");

const router = express.Router();

router.post("/add-note", addNote);
router.get("/get-notes", getNotes);
router.post("/delete-note", deleteNote);
router.post("/save-note", saveNote);

module.exports = router;

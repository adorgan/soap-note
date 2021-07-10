const express = require("express");
const addNote = require("../controllers/addNote");

const router = express.Router();

router.post("/add-note", addNote);

module.exports = router;

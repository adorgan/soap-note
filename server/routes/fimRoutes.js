const express = require("express");
const createFim = require("../controllers/fim");

const router = express.Router();

router.post("/fim", createFim);

module.exports = router;

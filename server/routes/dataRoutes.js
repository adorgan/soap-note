const express = require("express");
const getImpairments = require("../controllers/impairments");

const router = express.Router();

router.get("/get-impairments", getImpairments);

module.exports = router;

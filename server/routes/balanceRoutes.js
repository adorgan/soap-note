const express = require("express");
const makeBalance = require("../controllers/Balance/makeBalance");

const router = express.Router();

router.post("/balance", makeBalance);

module.exports = router;

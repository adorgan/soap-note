const express = require("express");
const createToiletTransfer = require("../controllers/Mobility/toiletTransfer");

const router = express.Router();

router.post("/toilet-transfer", createToiletTransfer);

module.exports = router;

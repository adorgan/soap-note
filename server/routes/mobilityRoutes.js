const express = require("express");
const createToiletTransfer = require("../controllers/Mobility/toiletTransfer");
const makeFunctionalMobilityBlurb = require("../controllers/FunctionalMobility/functionalMobility");

const router = express.Router();

router.post("/toilet-transfer", createToiletTransfer);
router.post("/functional-mobility", makeFunctionalMobilityBlurb);
module.exports = router;

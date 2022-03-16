const express = require("express");
const createToiletTransfer = require("../controllers/FunctionalMobility/toiletTransfer")
const makeFunctionalMobilityBlurb = require("../controllers/FunctionalMobility/functionalMobility");

const router = express.Router();

router.post("/toilet-transfers", createToiletTransfer);
router.post("/functional-mobility", makeFunctionalMobilityBlurb);
module.exports = router;

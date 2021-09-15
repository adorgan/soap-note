const express = require("express");
const createHemiDressing = require("../controllers/ADLs/hemiDressing");
const createGrooming = require("../controllers/ADLs/grooming");
const makeADL = require("../controllers/ADLs/ADL");

const router = express.Router();

router.post("/hemi-dressing", createHemiDressing);
router.post("/grooming", createGrooming);
router.post("/ADL", makeADL);

module.exports = router;

const express = require("express");
const createHemiDressing = require("../controllers/ADLs/hemiDressing");
const createGrooming = require("../controllers/ADLs/grooming");

const router = express.Router();

router.post("/hemi-dressing", createHemiDressing);
router.post("/grooming", createGrooming);

module.exports = router;

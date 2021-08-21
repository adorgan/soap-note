const express = require("express");
const createHemiDressing = require("../controllers/ADLs/hemiDressing");

const router = express.Router();

router.post("/hemi-dressing", createHemiDressing);

module.exports = router;

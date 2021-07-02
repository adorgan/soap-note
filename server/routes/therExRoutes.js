const express = require("express");
const createArmBike = require("../controllers/therEx/armbike");

const router = express.Router();

router.post("/arm-bike", createArmBike);

module.exports = router;

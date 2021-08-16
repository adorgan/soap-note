const express = require("express");
const createArmBike = require("../controllers/therEx/armbike");
const createArmExercises = require("../controllers/therEx/armExercises");

const router = express.Router();

router.post("/arm-bike", createArmBike);
router.post("/arm-exercises", createArmExercises);

module.exports = router;

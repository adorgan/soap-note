const express = require("express");
const loginUser = require("../controllers/auth/loginUser");
const registerUser = require("../controllers/auth/registerUser");
const checkLoggedIn = require("../controllers/auth/checkLoggedIn");

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/checkLoggedIn", checkLoggedIn);

module.exports = router;

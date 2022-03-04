const express = require("express");
const loginUser = require("../controllers/auth/loginUser");
const registerUser = require("../controllers/auth/registerUser");
const checkLoggedIn = require("../controllers/auth/checkLoggedIn");
const logoutUser = require("../controllers/auth/logoutUser");

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/checkLoggedIn", checkLoggedIn);
router.post("/logout", logoutUser);

module.exports = router;

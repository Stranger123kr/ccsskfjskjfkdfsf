const express = require("express");
const router = express.Router();
const { GetUser, Register, Login } = require("../Controllers/auth_controller");
const authentication = require("../Middleware/authentication");
// ------------------------------------------------------

router.get("/validuser", authentication, GetUser);
router.post("/register", Register);
router.post("/login", Login);

// ------------------------------------------------------

module.exports = router;

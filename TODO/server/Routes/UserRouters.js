const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const { SignupUser, LoginUser, Users } = userController;

// ------------------------------------------------

router.get("/", Users);
router.post("/singUp", SignupUser);
router.post("/login", LoginUser);

// ------------------------------------------------

module.exports = router;

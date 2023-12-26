const express = require("express");
const router = express.Router();
const authentication = require("../MiddleWare/Authentication");
// -----------------------------------------------------------

const {
  Login,
  Register,
  UserGet,
  Logout,
} = require("../Controllers/UserController");

router
  .get("/validuser", authentication, UserGet)
  .get("/logout", authentication, Logout)
  .post("/login", Login)
  .post("/register", Register);

// -----------------------------------------------------------

module.exports = router;

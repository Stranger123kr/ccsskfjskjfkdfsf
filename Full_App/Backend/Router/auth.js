const express = require("express");
const userRouter = express.Router();
const userController = require("../Controller/user_controller");
const Authentication = require("../Middleware/authenticate");

userRouter
  .get("/", userController.HomePage)
  .post("/login", userController.SignIn)
  .post("/register", userController.SignUp)
  .get("/about", Authentication, userController.AboutPage);
// .get("/contact", userController.ContactPage);

exports.router = userRouter;

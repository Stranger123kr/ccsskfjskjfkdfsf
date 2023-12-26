const express = require("express");
const router = express.Router();
const { ContactForm } = require("../Controllers/contact_controller");

// ------------------------------------------------------

// router.get("/", Home);
router.post("/contact", ContactForm);

// ------------------------------------------------------

module.exports = router;

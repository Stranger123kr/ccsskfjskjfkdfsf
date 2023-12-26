const express = require("express");
const router = express.Router();
const { Services } = require("../Controllers/service_controller");
// ------------------------------------------------------

router.get("/", Services);

// ------------------------------------------------------

module.exports = router;

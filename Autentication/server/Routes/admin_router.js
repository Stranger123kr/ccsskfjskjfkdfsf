const express = require("express");
const router = express.Router();
const {
  GetAllUsers,
  GetAllContacts,
} = require("../Controllers/admin_controller");

// ------------------------------------------------------

router.get("/users", GetAllUsers);
router.get("/contacts", GetAllContacts);

// ------------------------------------------------------

module.exports = router;

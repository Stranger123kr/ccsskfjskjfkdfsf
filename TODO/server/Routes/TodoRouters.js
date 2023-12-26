const express = require("express");
const router = express.Router();
const userController = require("../Controllers/TodoControllers");
const { CreateTodo, UpdateTodo, ReadTodo, DeleteTodo } = userController;

// ------------------------------------------------

router.get("/read/:id", ReadTodo);
router.post("/create", CreateTodo);
router.patch("/update/:id", UpdateTodo);
router.delete("/delete/:id", DeleteTodo);

// ------------------------------------------------

module.exports = router;

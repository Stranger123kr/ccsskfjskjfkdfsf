const Todo = require("../Model/TodoSchema");
const User = require("../Model/userSchema");

// ---------------------------------------------------------------------

const CreateTodo = async (req, res) => {
  const { title, body, id } = req.body;
  const ExistUser = await User.findById(id);
  try {
    if (ExistUser) {
      const NewTodo = new Todo({ title, body, user: ExistUser });
      await NewTodo.save();
      ExistUser.todoList.push(NewTodo);
      ExistUser.save();
      res.status(200).json({ NewTodo, msg: "New Todo Create Successfully" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

// ---------------------------------------------------------------------

const ReadTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const NewTodo = await Todo.find({ user: id }).sort({ createdAt: -1 });
    if (NewTodo.length === 0) {
      res.status(406).json({ msg: "There is no Todo Please Create First" });
    } else {
      res.status(200).json(NewTodo);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

// ---------------------------------------------------------------------

const UpdateTodo = async (req, res) => {
  const { title, body } = req.body;
  const { id } = req.params;

  try {
    const NewTodo = await Todo.findByIdAndUpdate(
      id,
      { title, body },
      { new: true }
    );
    res.status(200).json({ NewTodo, msg: "New Todo Update Successfully" });
  } catch (error) {
    res.status(404).json(error);
  }
};

// ---------------------------------------------------------------------

const DeleteTodo = async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  try {
    const NewTodo = await User.findOneAndUpdate(
      { email },
      { $pull: { todoList: req.params.id } }
    );
    if (NewTodo) {
      await Todo.findByIdAndDelete(id);
      res.status(200).json({ NewTodo, msg: " Todo Delete Successfully" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = { CreateTodo, UpdateTodo, ReadTodo, DeleteTodo };

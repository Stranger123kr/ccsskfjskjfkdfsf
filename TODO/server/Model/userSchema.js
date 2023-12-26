const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// ---------------------------------------------

const TodoUser = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  todoList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo",
    },
  ],
});

// this is hash text password into hash password
// ----------------------------------------------------------------

TodoUser.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const salt = bcrypt.genSaltSync(12);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  } catch (error) {
    console.log("Password Not hash Successfully");
  }
});

// ----------------------------------------------------------------

module.exports = mongoose.model("User", TodoUser);

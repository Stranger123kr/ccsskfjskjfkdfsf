const mongoose = require("mongoose");
const validator = require("validator");

// ---------------------------------------------

const contactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minLength: [2, "Username Must be at least 2 characters"],
      maxLength: [30, "Username Must be less then 30 characters"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        msg: "Please enter a valid email address",
      },
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minLength: [2, "Password must be at least 2 characters"],
      maxLength: [500, "Password must be less then 500 characters"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);

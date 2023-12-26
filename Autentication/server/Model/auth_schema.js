const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ---------------------------------------------

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minLength: [2, "Username Must be at least 2 characters"],
      maxLength: [30, "Username Must be less then 30 characters"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        msg: "Please enter a valid email address",
      },
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      minLength: [10, "Phone Number Must be at least 10 characters"],
      maxLength: [10, "Phone Number Must be less than 10 characters"],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "Password must be at least 5 characters"],
      maxLength: [50, "Password must be less then 50 characters"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// --------------------------------------------------------

// hashing password for security purpose

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const salt = await bcrypt.genSalt(12);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
  } catch (error) {
    next(error);
  }
});

// --------------------------------------------------------

// generating json web token to verify user

userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign(
      { _id: this._id.toString(), email: this.email, isAdmin: this.isAdmin },
      process.env.PRIVATEKEY,
      {
        expiresIn: "1d",
      }
    );
    return token;
  } catch (error) {
    // Handle any errors that occur during token generation
    throw new Error("Token generation failed");
  }
};

// --------------------------------------------------------

module.exports = mongoose.model("User", userSchema);

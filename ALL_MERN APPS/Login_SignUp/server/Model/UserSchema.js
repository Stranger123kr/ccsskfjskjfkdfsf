const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const privateKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpeyJzdWI0RMHrHDcYZgeFONFh7HgQ";
// --------------------------------------------

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
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
  password: {
    type: String,
    minlength: 6,
    required: true,
    trim: true,
  },
  cpassword: {
    type: String,
    minlength: 6,
    required: true,
    trim: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// this is hash text password into hash password
// ----------------------------------------------------------------
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    this.cpassword = await bcrypt.hash(this.cpassword, salt);
  }
  next();
});

// this is for generate jwt token
// ----------------------------------------------------------------
UserSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, privateKey);
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoose.model("User", UserSchema);

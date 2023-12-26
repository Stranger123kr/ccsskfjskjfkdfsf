const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const HASH_ROUNDS = 12;
const privateKey = process.env.PRIVATEKEY;
// ==========================================================

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  work: { type: String, required: true },
  password: { type: String, required: true },
  confirm_password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  tokens: [{ token: { type: String, required: true } }],
});

// ===============================================================

// this is method to hash a password

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(HASH_ROUNDS);
    this.password = await bcrypt.hash(this.password, salt);
    this.confirm_password = await bcrypt.hash(this.confirm_password, salt);
  }
  next();
});

// ===============================================================
// this is method to generate token

userSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, privateKey);
    this.tokens = this.tokens.concat({ token });
    await this.save();
    return token;
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

module.exports.users = mongoose.model("users", userSchema);

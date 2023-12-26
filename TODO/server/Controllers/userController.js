const User = require("../Model/userSchema");
const bcrypt = require("bcryptjs");
const SignupUser = async (req, res) => {
  const { username, email, password } = req.body;
  const ExistUser = await User.findOne({ email: email });

  try {
    if (!username || !email || !password) {
      res.status(406).json("Please Fill All The Fields");
    } else if (ExistUser) {
      res.status(403).json("You are already exist");
    } else {
      const NewUser = new User({ username, email, password });
      await NewUser.save();
      res.status(200).json({ msg: "User saved successfully", NewUser });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  const ExistUser = await User.findOne({ email: email });

  try {
    if (!email || !password) {
      res.status(400).json("Please Fill All The Fields");
    } else if (
      !ExistUser ||
      !bcrypt.compareSync(password, ExistUser.password)
    ) {
      res.status(401).json("Your Credentials are Wrong");
    } else {
      const { password, ...NewUser } = ExistUser._doc;
      res.status(200).json({ NewUser, msg: "User Login successfully" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const Users = async (req, res) => {
  const NewUser = await User.find({});
  res.status(200).json(NewUser);
};

module.exports = { SignupUser, LoginUser, Users };

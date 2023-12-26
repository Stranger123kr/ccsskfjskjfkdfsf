const User = require("../Model/auth_schema");
const bcrypt = require("bcryptjs");
// ----------------------------------------------

const Register = async (req, res, next) => {
  const { username, email, phone, password } = req.body;
  const EexistUser = await User.findOne({ email });
  const EexistPhone = await User.findOne({ phone });

  try {
    if (!username || !email || !phone || !password) {
      res.status(406).json("Please Fill All Empty Fields");
    } else if (EexistUser) {
      res.status(409).json("You Are Already Registered With This Email");
    } else if (EexistPhone) {
      res
        .status(409)
        .json("This is a Duplicate Number Please Enter a Valid Number");
    } else {
      const NewUser = new User({
        username,
        email,
        phone,
        password,
      });
      await NewUser.save();
      res.status(201).json({
        msg: "User Register Successfully",
        Jwt_token: await NewUser.generateAuthToken(),
        UserId: NewUser._id.toString(),
      });
    }
  } catch (error) {
    next(error);
  }
};

// ----------------------------------------------

const Login = async (req, res, next) => {
  const { email, password } = req.body;

  const EexistUser = await User.findOne({ email: email });
  try {
    if (!email || !password) {
      res.status(409).json("Please Fill All Empty Fields");
    } else if (
      !EexistUser ||
      !bcrypt.compareSync(password, EexistUser.password)
    ) {
      res.status(400).json("Your Email or Password are Wrong");
    } else {
      res.status(200).json({
        msg: "User Login Successfully",
        Jwt_token: await EexistUser.generateAuthToken(),
        UserId: EexistUser._id.toString(),
      });
    }
  } catch (error) {
    next(error);
  }
};

// ----------------------------------------------

const GetUser = async (req, res, next) => {
  try {
    const UserData = req.rootUser;
    res.status(200).json({
      msg: "User Found Successfully",
      UserData,
    });
  } catch (error) {
    next(error);
  }
};

// ----------------------------------------------

module.exports = { GetUser, Register, Login };

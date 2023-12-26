const User = require("../Model/UserSchema");
const bcrypt = require("bcryptjs");

// -----------------------------------------------------------

const Register = async (req, res) => {
  const { fname, email, password, cpassword } = req.body;
  const EmailChecker = await User.findOne({ email: email });

  // -----------------------------------------------------------

  try {
    if (!fname || !email || !password || !cpassword) {
      res.status(406).json("Fill All The Fields");
    } else if (EmailChecker) {
      res.status(409).json("You Are Already Exist Add New Email Id");
    } else if (password !== cpassword) {
      res.status(401).json("password and Confirm Password Not Match");
    } else {
      const NewUser = new User({ fname, email, password, cpassword });
      await NewUser.save();
      res.status(201).json({ NewUser, msg: "User Register Successfully" });
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

// -----------------------------------------------------------

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // -----------------------------------------------------------

    if (!email || !password) {
      res.status(406).json("Fill All The Empty Fields");
    }

    // -----------------------------------------------------------

    const UserValidate = await User.findOne({ email: email });

    // -----------------------------------------------------------

    if (!UserValidate || !bcrypt.compareSync(password, UserValidate.password)) {
      res.status(401).json("Your Credentials Not Match Try Again");

      // -----------------------------------------------------------
    } else {
      const token = await UserValidate.generateAuthToken(); // generating a token
      res.cookie("UserToken", token, {
        httpOnly: true,
        secure: true,
      });

      res
        .status(200)
        .json({ msg: "User Found Successfully", UserValidate, token });
    }
  } catch (error) {
    res.status(404).json({ error });
    console.log(error);
  }
};

// -----------------------------------------------------------

const UserGet = async (req, res) => {
  try {
    const UserValidate = await User.findOne({ _id: req.userId });
    res.status(200).json(UserValidate);
  } catch (error) {
    res.status(404).json({ error });
  }
};

// -----------------------------------------------------------

const Logout = async (req, res) => {
  try {
    const tok = (req.rootUser.tokens = req.rootUser.tokens.filter((element) => {
      return element.token !== req.token;
    }));
    res.clearCookie("UserToken", { path: "/" });
    req.rootUser.save();
    res.status(200).json("user Logout");
  } catch (error) {
    res.status(401).json({ error });
  }
};

// -----------------------------------------------------------

module.exports = { Login, Register, UserGet, Logout };

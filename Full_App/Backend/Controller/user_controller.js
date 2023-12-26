const model = require("../Model/UserSchema");
const User = model.users;
require("../Database/connect");
const bcrypt = require("bcryptjs");

// ====================================================

// SignUp From Process function

exports.SignUp = async (req, res) => {
  const { name, email, phone, work, password, confirm_password } = req.body;

  if (!name || !email || !phone || !work || !password || !confirm_password) {
    return res
      .status(422)
      .json({ error: "Please Fill All The Fields Properly" });
  }
  try {
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(422).json({ error: "Email All Ready Exist" });
    } else if (password !== confirm_password) {
      return res.status(422).json({
        error: "check your password and confirmPassword they are not matching",
      });
    } else {
      const user = new User(req.body);
      await user.save();
      res.status(200).json({ message: "user saved successfully" });
    }
  } catch (error) {
    res.status(422).json(error);
    console.log(error);
  }
};

// ====================================================

exports.HomePage = async (req, res) => {
  try {
    await User.find({}).then((doc) => {
      res.status(200).json(doc);
    });
  } catch (error) {
    res.status(400).json(error);
  }
};

// ====================================================

// SignIn From Process function

exports.SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(422)
        .json({ error: "Please Fill All The Fields Properly" });
    }

    // ======================================================

    const userExist = await User.findOne({ email });

    // ======================================================

    const token = await userExist.generateAuthToken();

    // ======================================================

    // we are  storing a token into our cookies to identify user

    res.cookie("JWT", token, {
      httpOnly: true,
      secure: true,
    });

    // ======================================================

    // check account found and verify password
    if (!userExist || !bcrypt.compareSync(password, userExist.password)) {
      // authentication failed
      res.status(422).json({ message: "Invalid Credentials" });
    } else {
      // authentication successful
      res.status(200).json({ message: "user found successfully" });
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

// ======================================================
//  about us page verification

exports.AboutPage = async (req, res) => {
  res.send(req.rootUser);
};

// ======================================================
//  about us page verification

// exports.ContactPage = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const userExist = await User.findOne({ email });
//     console.log(userExist);
//     res.status(200).json(userExist);
//   } catch (error) {
//     res.status(500).json(error);
//     console.log(error);
//   }
// };

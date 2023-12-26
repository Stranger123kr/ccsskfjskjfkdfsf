const jwt = require("jsonwebtoken");
const User = require("../Model/auth_schema");
//   ------------------------------------------------------------------

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const VerifyToken = jwt.verify(token, process.env.PRIVATEKEY);

    const rootUser = await User.findOne({ _id: VerifyToken._id }).select({
      password: 0,
    });

    if (!rootUser) {
      throw new Error("User Not Found");
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userId = rootUser._id;

    next();
  } catch (error) {
    res.status(401).json({ msg: "Unauthorize User" });
  }
};

module.exports = authentication;

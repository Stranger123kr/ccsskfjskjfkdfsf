const jwt = require("jsonwebtoken");
const UserDb = require("../Model/UserSchema");

const privateKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpeyJzdWI0RMHrHDcYZgeFONFh7HgQ";

//   ------------------------------------------------------------------

const authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const VerifyToken = jwt.verify(token, privateKey);

    const rootUser = await UserDb.findOne({ _id: VerifyToken._id });

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

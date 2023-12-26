const User = require("../Model/UserSchema");
const privateKey = process.env.PRIVATEKEY;
const jwt = require("jsonwebtoken");
// =================================
Authentication = async (req, res, next) => {
  console.log(req.cookies.JWT);
  // try {
  //   const token = req.cookies.JWT;
  //   console.log(req.cookies.JWT);
  //   const VerifyToken = jwt.verify(token, privateKey);

  //   const rootUser = await User.findOne({
  //     _id: VerifyToken._id,
  //     "tokens.token": token,
  //   });

  //   if (!rootUser) {
  //     throw new Error("User not Found");
  //   }

  //   req.token = token;
  //   req.rootUser = rootUser;
  //   req.userID = rootUser._id;
  next();
  // } catch (error) {
  //   res.status(401).json("User Not Found Unauthorized Token");
  //   console.log(error);
  // }
};

module.exports = Authentication;

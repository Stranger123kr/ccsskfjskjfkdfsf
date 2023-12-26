const User = require("../Model/auth_schema");
const Contact = require("../Model/contact_schema");

const GetAllUsers = async (req, res, next) => {
  try {
    const GetUser = await User.find({}, { password: 0 });
    if (!GetUser || GetUser.length === 0) {
      res.status(404).json("No User found");
    } else {
      res.status(200).json(GetUser);
    }
  } catch (error) {
    next(error);
  }
};

// -------------------------------------------------------

const GetAllContacts = async (req, res, next) => {
  try {
    const GetContacts = await Contact.find();
    if (!GetContacts || GetContacts.length === 0) {
      res.status(404).json("No Contacts found");
    } else {
      res.status(200).json(GetContacts);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { GetAllUsers, GetAllContacts };

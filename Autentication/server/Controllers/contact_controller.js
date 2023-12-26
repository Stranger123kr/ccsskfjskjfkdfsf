const Contact = require("../Model/contact_schema");
// ----------------------------------------------

const ContactForm = async (req, res, next) => {
  const { username, email, message } = req.body;
  try {
    if (!username || !email || !message) {
      res.status(406).json("Please Fill All Empty Fields");
    } else {
      const NewContact = new Contact({
        username,
        email,
        message,
      });
      await NewContact.save();
      res.status(201).json({
        msg: "Message Send Successfully",
      });
    }
  } catch (error) {
    next(error);
  }
};

// ----------------------------------------------

module.exports = { ContactForm };

const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect(process.env.DATABASE);
  console.log("Database connect Successfully");
};

main().catch((err) => console.log(err));

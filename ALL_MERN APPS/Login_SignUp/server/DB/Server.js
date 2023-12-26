const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect(process.env.DATABASE);
  console.log("Database Connect SuccessFully");
};

main().catch((err) => console.log(err));

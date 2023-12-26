const mongoose = require("mongoose");
const DB = process.env.DATABASE_URL;
const dotenv = require("dotenv");
dotenv.config();

// ===========================================

// Database connectivity

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);

  console.log("Database connected Successfully");
}

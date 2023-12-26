const express = require("express");
const server = express();
require("dotenv").config();
require("./DB/Server");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// --------------------------------------------------

const router = require("./Routes/Route");

// --------------------------------------------------

server.use(express.json());
server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
server.use(cookieParser());
server.use("/", router);

// --------------------------------------------------

server.listen(process.env.PORT, () => {
  console.log(`Server Listen on ${process.env.PORT}`);
});

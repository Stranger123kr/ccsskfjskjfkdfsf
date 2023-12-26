const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
var cors = require("cors");
const cookieParser = require("cookie-parser");

// ===================================================================

// local require files

require("./Database/connect");
const PORT = process.env.PORT_KEY;
const userRouter = require("./Router/auth");

// ===================================================================

// this is bodyParser
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/", userRouter.router);

// ===================================================================

app.listen(PORT, () => {
  console.log("Server is listening on port number 5000");
});

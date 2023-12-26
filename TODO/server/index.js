const express = require("express");
const server = express();
const cors = require("cors");
require("dotenv").config();
require("./DB/connection");

// -------------------------------------

const UserRouter = require("./Routes/UserRouters");
const TodoRouter = require("./Routes/TodoRouters");

// -------------------------------------

server.use(cors());
server.use(express.json());
server.use("/api/v1", UserRouter);
server.use("/api/v2", TodoRouter);

// ---------------------------------------

server.listen(process.env.PORT, () => {
  console.log(`Server is Listening on port ${process.env.PORT}`);
});

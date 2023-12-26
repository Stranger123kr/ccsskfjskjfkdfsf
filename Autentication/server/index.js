const express = require("express");
const server = express();
require("dotenv").config();
require("./DB/connection");
const cors = require("cors");

// ------------------------------------------------------

const Auth_router = require("./Routes/auth_router");
const Contact_router = require("./Routes/contact_router");
const services_router = require("./Routes/service_router");
const Admin_router = require("./Routes/admin_router");
const errorMiddleware = require("./Middleware/error_handling");

server.use(express.json());
server.use(cors());
server.use("/api/auth", Auth_router);
server.use("/api/form", Contact_router);
server.use("/api/service", services_router);
server.use("/api/admin", Admin_router);
server.use(errorMiddleware);

// ------------------------------------------------------

server.listen(process.env.PORT, () => {
  console.log(`Server Running on port ${process.env.PORT}`);
});

// Define error-handling middleware
const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Backend Error";

  res.status(status).send({ message });
};

module.exports = errorMiddleware;

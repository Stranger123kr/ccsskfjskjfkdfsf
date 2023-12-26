const services = require("../Model/service_schema");

const Services = async (req, res, next) => {
  try {
    const servicesInfo = await services.find({});
    res.status(200).json(servicesInfo);
  } catch (error) {
    next(error);
  }
};

module.exports = { Services };

const familleModels = require("../models/famille.models.js");

const getPersoConfiance = async (req, res) => {
  const result = await familleModels.getPersoConfiance(req);
  return res.json(result);
};

const postReservation = async (req, res) => {
  const result = await familleModels.postReservation(req);
  return res.json(result);
};

module.exports = {
  getPersoConfiance,
  postReservation,
};

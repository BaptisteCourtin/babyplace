const familleModels = require("../models/famille.models.js");

const getPersoConfiance = async (req, res) => {
  console.log([req.params.id]);
  const result = await familleModels.getPersoConfiance(req);
  console.log("result :" + result);
  return res.json(result);
};

module.exports = {
  getPersoConfiance,
};

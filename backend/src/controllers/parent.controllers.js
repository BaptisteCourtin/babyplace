const parentModels = require("../models/parent.models");

const postFormInscription = async (req, res) => {
  await parentModels.getPersoConfiance(req);
  res.send(req.files);
};

module.exports = {
  postFormInscription,
};

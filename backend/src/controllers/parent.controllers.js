const parentModels = require("../models/parent.models");

const getDonneesFormParent = async (req, res) => {
  const result = await parentModels.getDonneesFormParent(req);
  return res.json(result);
};

const updateFormParent = async (req, res) => {
  const result = await parentModels.updateFormParent(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const nullOneDocFormParent = async (req, res) => {
  const result = await parentModels.nullOneDocFormParent(req);
  return res.json(result);
};

module.exports = {
  getDonneesFormParent,
  updateFormParent,
  nullOneDocFormParent,
};

const enfantModels = require("../models/enfant.models");

const getDonneesFormEnfant = async (req, res) => {
  const result = await enfantModels.getDonneesFormEnfant(req);
  return res.json(result);
};

const getNomsEtIdEnfants = async (req, res) => {
  const result = await enfantModels.getNomsEtIdEnfants(req);
  return res.json(result);
};

const getNomsEtIdEnfants100 = async (req, res) => {
  const result = await enfantModels.getNomsEtIdEnfants100(req);
  return res.json(result);
};

const updateFormEnfant = async (req, res) => {
  const result = await enfantModels.updateFormEnfant(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const postNewEnfant = async (req, res) => {
  const result = await enfantModels.postNewEnfant(req);
  return res.json(result);
};

const deleteEnfant = async (req, res) => {
  const result = await enfantModels.deleteEnfant(req);
  return res.json(result);
};

module.exports = {
  deleteEnfant,
  postNewEnfant,
  updateFormEnfant,
  getNomsEtIdEnfants,
  getNomsEtIdEnfants100,
  getDonneesFormEnfant,
};

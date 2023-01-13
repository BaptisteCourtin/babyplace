const familleModels = require("../models/famille.models");

const getFamille = async (req, res) => {
  const result = await familleModels.getFamille();
  return res.json(result);
};

const getPersoConfiance = async (req, res) => {
  const result = await familleModels.getPersoConfiance(req);
  return res.json(result);
};

const getDonneesFormParent = async (req, res) => {
  const result = await familleModels.getDonneesFormParent(req);
  return res.json(result);
};

const getDonneesFormEnfant = async (req, res) => {
  const result = await familleModels.getDonneesFormEnfant(req);
  return res.json(result);
};

const getDonneesFormInscription = async (req, res) => {
  const result = await familleModels.getDonneesFormInscription(req);
  return res.json(result);
};

const getPourcent = async (req, res) => {
  const result = await familleModels.getPourcent(req);
  // console.log(result);
  return res.json(result);
};

const getNomsEtIdEnfants = async (req, res) => {
  const result = await familleModels.getNomsEtIdEnfants(req);
  return res.json(result);
};

const updateFormParent = async (req, res) => {
  const result = await familleModels.updateFormParent(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const updateFormEnfant = async (req, res) => {
  const result = await familleModels.updateFormEnfant(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const postReservation = async (req, res) => {
  const result = await familleModels.postReservation(req);
  return res.json(result);
};

const postNewEnfant = async (req, res) => {
  const result = await familleModels.postNewEnfant(req);
  return res.json(result);
};

const deleteEnfant = async (req, res) => {
  const result = await familleModels.deleteEnfant(req);
  return res.json(result);
};

module.exports = {
  getPersoConfiance,
  postReservation,
  getFamille,
  updateFormParent,
  getDonneesFormParent,
  updateFormEnfant,
  getDonneesFormEnfant,
  getPourcent,
  getNomsEtIdEnfants,
  postNewEnfant,
  deleteEnfant,
  getDonneesFormInscription,
};

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

const getFamilleInfo = async (req, res) => {
  const result = await familleModels.getFamilleInfo(req);
  return res.json(result);
};

const getNomsEtIdEnfants = async (req, res) => {
  const result = await familleModels.getNomsEtIdEnfants(req);
  return res.json(result);
};

const getNomsEtIdEnfants100 = async (req, res) => {
  const result = await familleModels.getNomsEtIdEnfants100(req);
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

const postNewConfiance = async (req, res) => {
  const result = await familleModels.postNewConfiance(req);
  return res.json(result);
};

const deleteEnfant = async (req, res) => {
  const result = await familleModels.deleteEnfant(req);
  return res.json(result);
};

const deleteConfiance = async (req, res) => {
  const result = await familleModels.deleteConfiance(req);
  return res.json(result);
};

const nullOneDocFormParent = async (req, res) => {
  const result = await familleModels.nullOneDocFormParent(req);
  return res.json(result);
};

const nullOneDocFormCommun = async (req, res) => {
  const result = await familleModels.nullOneDocFormCommun(req);
  return res.json(result);
};

const getFamilleDataMess = async (req, res) => {
  const result = await familleModels.getFamilleDataMess(req);
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
  getNomsEtIdEnfants100,
  postNewEnfant,
  deleteEnfant,
  getDonneesFormInscription,
  getFamilleDataMess,
  postNewConfiance,
  deleteConfiance,
  getFamilleInfo,
  nullOneDocFormParent,
  nullOneDocFormCommun,
};
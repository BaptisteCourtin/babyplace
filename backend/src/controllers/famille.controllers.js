const familleModels = require("../models/famille.models");

const getFamille = async (req, res) => {
  const result = await familleModels.getFamille();
  return res.json(result);
};

const getPersoConfiance = async (req, res) => {
  const result = await familleModels.getPersoConfiance(req);
  return res.json(result);
};

const getDonneesFormInscription = async (req, res) => {
  const result = await familleModels.getDonneesFormInscription(req);
  return res.json(result);
};

const getPourcent = async (req, res) => {
  const result = await familleModels.getPourcent(req);
  return res.json(result);
};

const getLikes = async (req, res) => {
  const result = await familleModels.getLikes(req);
  return res.json(result);
};

const getLikesAndStructure = async (req, res) => {
  const result = await familleModels.getLikesAndStructure(req);
  return res.json(result);
};

const getFamilleInfo = async (req, res) => {
  const result = await familleModels.getFamilleInfo(req);
  return res.json(result);
};

const getFamilleDataMess = async (req, res) => {
  const result = await familleModels.getFamilleDataMess(req);
  return res.json(result);
};

const updatePourcentFormInscr = async (req, res) => {
  const result = await familleModels.updatePourcentFormInscr(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const postNewConfiance = async (req, res) => {
  const result = await familleModels.postNewConfiance(req);
  return res.json(result);
};

const postNewLike = async (req, res) => {
  const result = await familleModels.postNewLike(req);
  return res.json(result);
};

const deleteConfiance = async (req, res) => {
  const result = await familleModels.deleteConfiance(req);
  return res.json(result);
};

const deleteLike = async (req, res) => {
  const result = await familleModels.deleteLike(req);
  return res.json(result);
};

const nullOneDocFormCommun = async (req, res) => {
  const result = await familleModels.nullOneDocFormCommun(req);
  return res.json(result);
};

const deco = async (req, res) => {
  const result = await familleModels.deco(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

module.exports = {
  getPersoConfiance,
  getFamille,
  getPourcent,
  getLikes,
  getLikesAndStructure,
  getDonneesFormInscription,
  getFamilleDataMess,
  postNewConfiance,
  deleteConfiance,
  getFamilleInfo,
  nullOneDocFormCommun,
  updatePourcentFormInscr,
  deleteLike,
  postNewLike,
  deco,
};

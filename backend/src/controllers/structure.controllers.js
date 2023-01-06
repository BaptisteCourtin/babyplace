const structureModels = require("../models/structure.models.js");

const getAllStructures = async (req, res) => {
  const result = await structureModels.getAllStructures(req);
  return res.json(result);
};

const getStructureById = async (req, res) => {
  const result = await structureModels.getStructureById(req);
  return res.json(result);
};

const getStructure = async (req, res) => {
  const result = await structureModels.getStructure(req);
  return res.json(result);
};

const logout = async (req, res) => {
  const { token, tokenStart, id } = req.body;
  const result = await structureModels.logout(token, tokenStart, id);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const getStructureDataMess = async (req, res) => {
  const result = await structureModels.getStructureDataMess(req);
  return res.json(result);
};

const updateNotes = async (req, res) => {
  const result = await structureModels.updateNotes(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const updateSignal = async (req, res) => {
  const result = await structureModels.updateSignal(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

module.exports = {
  getStructure,
  getStructureDataMess,
  getAllStructures,
  getStructureById,
  updateNotes,
  logout,
  updateSignal,
};

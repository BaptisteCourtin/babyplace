const structureModels = require("../models/structure.models.js");

const getAllStructures = async (req, res) => {
  const result = await structureModels.getAllStructures(req);
  return res.json(result);
};

const getStructures = async (req, res) => {
  const result = await structureModels.getStructures();
  return res.json(result);
}

const getStructureById = async (req, res) => {
  const result = await structureModels.getStructureById(req);
  return res.json(result);
};

const getStructure = async (req, res) => {
  const result = await structureModels.getStructure(req);
  return res.json(result);
};

const getStructureDetails = async (req, res) => {
  const { type, id } = req.query;
  const result = await structureModels.getStructureDetails(req, type, id);
  return res.json(result);
}

const getStructureType = async (req, res) => {
  const type = req.query.type
  const { id } = req.params
  const result = await structureModels.getStructureType(id, type)
  return res.json(result);
}

const getNotVerified = async (req, res) => {
  const result = await structureModels.getNotVerified()
  return res.json(result)
}

const updateVerified = async (req, res) => {
  const { id } = req.params
  const result = await structureModels.updateVerified(id);
  if (result.affectedRows === 0) {
    return res.status(404).send("Not found")
  } else {
    return res.status(204)
  }
}

const deleteRefused = async (req, res) => {
  const id = parseInt(req.params.id)
  let type = req.query.type
  if (type) {
    type = 'creche'
  } else {
    type = 'assMat'
  }
  const result = await structureModels.deleteRefused(id, type)
  if (result.affectedRows === 0) {
    res.status(404).send("Not found")
  } else {
    res.status(204)
  }
}

const logout = async (req, res) => {
  const { token, tokenStart, id } = req.body
  const result = await structureModels.logout(token, tokenStart, id)
  if (result.affectedRows === 0) {
    res.status(404).send("Not found")
  } else {
    res.sendStatus(204)
  }
}

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
  getStructures,
  getStructureDetails,
  getStructureType,
  getNotVerified,
  updateVerified,
  deleteRefused,
  getStructureDataMess,
  getAllStructures,
  getStructureById,
  updateNotes,
  logout,
  updateSignal,
};

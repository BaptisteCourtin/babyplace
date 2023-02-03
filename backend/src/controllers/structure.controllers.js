const structureModels = require("../models/structure.models.js");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

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

const getStructureId = async (req, res) => {
  const { token } = req.query
  const result = await structureModels.getStructureId(token)
  return res.json(result)
}

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

const getFavorites = async (req, res) => {
  const { id } = req.params
  const result = await structureModels.getFavorites(id)
  return res.json(result)
}

const updateVerified = async (req, res) => {
  const { id } = req.params
  const result = await structureModels.updateVerified(id);
  if (result.affectedRows === 0) {
    return res.status(404).send("Not found")
  } else {
    return res.sendStatus(204)
  }
}

const updateImages = async (req, res) => {
  const { id, value, file, table } = req.body
  const result = await structureModels.updateImages(id, value, file, table)
  if (result.affectedRows === 0) {
    return res.status(404).send("Not found")
  } else {
    return res.sendStatus(204)
  }
}

const uploadProfil = async (req, res) => {
  const { originalname, filename, destination } = req.file;
  let oldName = `${destination}${filename}`
  let newName = `${destination}${uuidv4()}-${originalname}`

  fs
    .rename(oldName, newName, (err) => {
      if (err) throw err;
      newName = newName.replace("public", '')
      res.send(newName);
    });
}

const updateInfos = async (req, res) => {
  const { id, table, nom, nomNaissance, nomUsage, prenom, adresse, email, telephone, description } = req.body
  const result = await structureModels.updateInfos(id, table, nom, nomNaissance, nomUsage, prenom, adresse, email, telephone, description)
  if (result.affectedRows === 0) {
    return res.status(404).send("Not found")
  } else {
    return res.sendStatus(200)
  }
}

const updatePwd = async (req, res) => {
  const { id, pwd } = req.body
  const result = await structureModels.updatePwd(id, pwd)
  if (result.affectedRows === 0) {
    return res.status(404).send("Not found")
  } else {
    return res.sendStatus(200)
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
    res.sendStatus(204)
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

const updateSignaled = async (req, res) => {
  const result = await structureModels.updateSignaled(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

module.exports = {
  getStructure,
  getStructures,
  getStructureId,
  getStructureDetails,
  getStructureType,
  getNotVerified,
  getFavorites,
  updateVerified,
  updateImages,
  deleteRefused,
  getStructureDataMess,
  getAllStructures,
  getStructureById,
  updateInfos,
  updatePwd,
  updateNotes,
  uploadProfil,
  logout,
  updateSignal,
  updateSignaled
};

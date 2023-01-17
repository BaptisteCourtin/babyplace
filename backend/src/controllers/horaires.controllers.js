const horairesModels = require("../models/horaires.models.js");

const getHorairesById = async (req, res) => {
  const id = req.params.id
  const result = await horairesModels.getHorairesById(id);
  return res.json(result);
};

const updateDay = async (req, res) => {
  const { id, structureId, value } = req.body;
  const result = await horairesModels.updateDay(id, structureId, value);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

module.exports = {
  updateDay,
  getHorairesById,
};

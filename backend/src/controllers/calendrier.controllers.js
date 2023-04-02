const calendrierModels = require("../models/calendrier.models");

const getCalendrier = async (req, res) => {
  const id = req.params.id;
  const result = await calendrierModels.getCalendrier(id);
  return res.json(result);
};

const getCalendrierMoins = async (req, res) => {
  const id = req.params.id;
  const result = await calendrierModels.getCalendrierMoins(id);
  return res.json(result);
};

const updateStatusClose = async (req, res) => {
  const { id } = req.body;
  const result = await calendrierModels.updateStatusClose(id);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const updateStatusOpen = async (req, res) => {
  const { places, id } = req.body;
  const result = await calendrierModels.updateStatusOpen(places, id);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const updatePlaces = async (req, res) => {
  const { nbPlaces, id } = req.body;
  const result = await calendrierModels.updatePlaces(nbPlaces, id);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const postDate = async (req, res) => {
  const { date, nbPlaces, structureId } = req.body;
  const result = await calendrierModels.postDate(date, nbPlaces, structureId);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const deleteDates = async (req, res) => {
  const result = await calendrierModels.deleteDates();
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const deleteFullDate = async (req, res) => {
  const { id } = req.params;
  const result = await calendrierModels.deleteFullDate(id);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

module.exports = {
  getCalendrier,
  updateStatusClose,
  updateStatusOpen,
  updatePlaces,
  postDate,
  deleteDates,
  deleteFullDate,
  getCalendrierMoins,
};

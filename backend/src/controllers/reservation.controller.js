const reservationModels = require("../models/reservation.models.js");

const getReser = async (req, res) => {
  const { id } = req.params;
  const result = await reservationModels.getReser(id);
  return res.json(result);
};

const getReservationAR = async (req, res) => {
  const result = await reservationModels.getReservationAR(req);
  return res.json(result);
};

const getReservationPayed = async (req, res) => {
  const result = await reservationModels.getReservationPayed(req);
  return res.json(result);
};

const updateStatus = async (req, res) => {
  const { status, id } = req.body;
  const result = await reservationModels.updateStatus(status, id);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const updateResaToNote = async (req, res) => {
  const result = await reservationModels.updateResaToNote(req);
  if (result.affectedRows === 0) {
    res.status(404).send("Not found");
  } else {
    res.sendStatus(204);
  }
};

const postReservation = async (req, res) => {
  const result = await reservationModels.postReservation(req);
  return res.json(result);
};

const deleteResa = async (req, res) => {
  const result = await reservationModels.deleteResa(req);
  return res.json(result);
};

const deleteResaByDate = async (req, res) => {
  const result = await reservationModels.deleteResaByDate(req);
  return res.json(result);
};

module.exports = {
  getReser,
  getReservationAR,
  getReservationPayed,
  updateStatus,
  postReservation,
  deleteResa,
  deleteResaByDate,
  updateResaToNote,
};

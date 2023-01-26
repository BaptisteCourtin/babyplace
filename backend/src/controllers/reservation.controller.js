const reservationModels = require("../models/reservation.models.js");

const getReser = async (req, res) => {
    const { id } = req.params;
    const result = await reservationModels.getReser(id);
    return res.json(result);
};

const getApprovedReser = async (req, res) => {
    const { id } = req.params;
    const result = await reservationModels.getApprovedReser(id)
    return res.json(result)
}

const updateStatus = async (req, res) => {
    const { status, id } = req.body
    const result = await reservationModels.updateStatus(status, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

const updateDates = async (req, res) => {
    const { id, dateStart, dateEnd } = req.body
    console.log(req.body)
    const result = await reservationModels.updateDates(id, dateStart, dateEnd)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

module.exports = {
    getReser,
    getApprovedReser,
    updateStatus,
    updateDates
}
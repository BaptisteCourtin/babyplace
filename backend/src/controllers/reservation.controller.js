const reservationModels = require("../models/reservation.models.js");

const getReser = async (req, res) => {
    const result = await reservationModels.getReser();
    return res.json(result);
};

const updateStatus = async (req, res) => {
    const { status, id } = req.body
    const result = await reservationModels.updateStatus(status, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

module.exports = {
    getReser,
    updateStatus
}
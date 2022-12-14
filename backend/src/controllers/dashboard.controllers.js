const dashboardModels = require('../models/dashboard.models');

const updateDay = async (req, res) => {
    const { toggleDay, day, id } = req.body

    const result = await dashboardModels.updateDay(toggleDay, day, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

const updateIndemnRepas = async (req, res) => {
    const { indemn_repas, id } = req.body

    const result = await dashboardModels.updateIndemnRepas(indemn_repas, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}


module.exports = {
    updateDay,
    updateIndemnRepas
}
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

const updateHours = async (req, res) => {
    const { heureMin, heureMax, structureId, jourId } = req.body

    const result = await dashboardModels.updateHours(heureMin, heureMax, structureId, jourId)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

const updateIndemnRepas = async (req, res) => {
    const { indemnRepas, id } = req.body
    console.log(req.body)
    const result = await dashboardModels.updateIndemnRepas(indemnRepas, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

module.exports = {
    updateDay,
    updateHours,
    updateIndemnRepas,
}
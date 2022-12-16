const horairesModels = require('../models/horaires.models.js')

const getHoraires = async (req, res) => {
    const result = await horairesModels.getHoraires(req)
    return res.json(result)
}

const updateDay = async (req, res) => {
    const { toggleDay, id } = req.body

    const result = await horairesModels.updateDay(toggleDay, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

module.exports = {
    getHoraires,
    updateDay
}
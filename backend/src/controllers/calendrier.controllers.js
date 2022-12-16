const calendrierModels = require('../models/calendrier.models')

const getCalendrier = async (req, res) => {
    const id = req.params.id
    const result = await calendrierModels.getCalendrier(id)
    return res.json(result)
}

const updatePlaces = async (req, res) => {
    const { nbPlaces, id } = req.body
    console.log(req.body)
    const result = await calendrierModels.updatePlaces(nbPlaces, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

module.exports = {
    getCalendrier,
    updatePlaces
}
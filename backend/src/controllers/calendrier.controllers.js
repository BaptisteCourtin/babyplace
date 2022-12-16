const calendrierModels = require('../models/calendrier.models')

const getCalendrier = async (req, res) => {
    const id = req.params.id
    const result = await calendrierModels.getCalendrier(id)
    return res.json(result)
}

const updateStatus = async (nbPlaces, id) => {
    const [result] = await datasource.query("UPDATE structure SET nbPlaces = -1 WHERE structureId = ?", [id])
    return result
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
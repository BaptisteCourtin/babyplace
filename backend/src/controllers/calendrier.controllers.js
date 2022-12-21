const calendrierModels = require('../models/calendrier.models')

const getCalendrier = async (req, res) => {
    const id = req.params.id
    const result = await calendrierModels.getCalendrier(id)
    return res.json(result)
}

const updateStatusClose = async (req, res) => {
    const { id } = req.body
    const result = await calendrierModels.updateStatusClose(id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

const updateStatusOpen = async (req, res) => {
    const { maxPlaces, id } = req.body
    const result = await calendrierModels.updateStatusOpen(maxPlaces, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

const updatePlaces = async (req, res) => {
    const { nbPlaces, id } = req.body
    const result = await calendrierModels.updatePlaces(nbPlaces, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

const postDate = async (req, res) => {
    const { date, nbPlaces, structureId } = req.body
    calendrierModels.postDate(date, nbPlaces, structureId)
}

module.exports = {
    getCalendrier,
    updateStatusClose,
    updateStatusOpen,
    updatePlaces,
    postDate
}
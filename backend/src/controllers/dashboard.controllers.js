const dashboardModels = require('../models/dashboard.models');

const updateHours = async (req, res) => {
    const { id, value, state } = req.body
    const result = await dashboardModels.updateHours(id, value, state)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

const updateTarif = async (req, res) => {
    const { table, tarif, tarifValue, id } = req.body
    const result = await dashboardModels.updateTarif(table, tarif, tarifValue, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

const updateIndemn = async (req, res) => {
    const { table, indemn, indemnValue, id } = req.body
    const result = await dashboardModels.updateIndemn(table, indemn, indemnValue, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

const updateOptions = async (req, res) => {
    const { options, optionsValue, id } = req.body
    const result = await dashboardModels.updateOptions(options, optionsValue, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

module.exports = {
    updateHours,
    updateTarif,
    updateIndemn,
    updateOptions
}
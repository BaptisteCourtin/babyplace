const horairesModels = require('../models/horaires.models.js')

const getHoraires = async (req, res) => {
    const result = await horairesModels.getHoraires(req)
    return res.json(result)
}

module.exports = {
    getHoraires
}
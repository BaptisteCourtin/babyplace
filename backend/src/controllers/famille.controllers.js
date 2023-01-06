const familleModels = require("../models/famille.models");

const getFamille = async (req, res) => {
    const result = await familleModels.getFamille()
    return res.json(result)
}

module.exports = {
    getFamille
}
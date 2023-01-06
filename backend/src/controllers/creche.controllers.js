const crecheModels = require("../models/creche.models");

const getCreche = async (req, res) => {
    const result = await crecheModels.getCreche()
    return res.json(result)
}

module.exports = {
    getCreche
}
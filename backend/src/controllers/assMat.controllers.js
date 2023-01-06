const assMatModels = require("../models/assMat.models");

const getAssMat = async (req, res) => {
    const result = await assMatModels.getAssMat()
    return res.json(result)
}

module.exports = {
    getAssMat
}
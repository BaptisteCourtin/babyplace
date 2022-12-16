const structureModels = require('../models/structure.models.js')

const getStructure = async (req, res) => {
    const result = await structureModels.getStructure(req)
    return res.json(result)
}

module.exports = {
    getStructure
}
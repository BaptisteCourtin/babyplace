const structureModels = require('../models/structure.models.js')

const getStructure = async (req, res) => {
    const result = await structureModels.getStructure(req)
    return res.json(result)
}

const getStructureDataMess = async (req, res) => {
    console.log(req.body)
    const result = await structureModels.getStructureDataMess(req)
    return res.json(result)
}

module.exports = {
    getStructure,
    getStructureDataMess
}
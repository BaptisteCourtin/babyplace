const structureModels = require('../models/structure.models.js')

const getStructure = async (req, res) => {
    const result = await structureModels.getStructure(req)
    return res.json(result)
}

const logout = async (req, res) => {
    const { token, tokenStart, id } = req.body
    const result = await structureModels.logout(token, tokenStart, id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

const getStructureDataMess = async (req, res) => {
    const result = await structureModels.getStructureDataMess()
    return res.json(result)
}

module.exports = {
    getStructure,
    getStructureDataMess,
    logout
}
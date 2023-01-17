const messagerieModels = require("../models/messagerie.models.js");

const saveMessageInDb = async (req, res) => {
    const result = await messagerieModels.saveMessageInDb(req);
    return res.json(result);
};

const getAllMessageFromDb = async (req, res) => {
    const result = await messagerieModels.getAllMessageFromDb(req);
    return res.json(result);
};

module.exports = {
    saveMessageInDb,
    getAllMessageFromDb
}
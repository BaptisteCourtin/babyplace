const datasource = require("../../database")

const updateHours = async (heureMin, heureMax, structureId, jourId) => {
    const [result] = await datasource.query("UPDATE horaires SET heureMin = ?, heureMax = ? WHERE structureId = ? AND jourId = ?", [heureMin, heureMax, structureId, jourId])
    return result
}

const updateIndemnRepas = async (indemnRepas, id) => {
    const [result] = await datasource.query("UPDATE structure SET indemnRepas = ? WHERE structureId = ?", [indemnRepas, id])
    return result
}

module.exports = {
    updateHours,
    updateIndemnRepas,
}
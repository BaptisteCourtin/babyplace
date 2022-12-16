const datasource = require("../../database")

const updateDay = async (toggleDay, day, id) => {
    const [result] = await datasource.query(`UPDATE structure SET ${day} = ? WHERE structureId = ?`, [toggleDay, id])
    return result
}

const updateHours = async (heureMin, heureMax, structureId, jourId) => {
    const [result] = await datasource.query("UPDATE horaires SET heureMin = ?, heureMax = ? WHERE structureId = ? AND jourId = ?", [heureMin, heureMax, structureId, jourId])
    return result
}

const updateIndemnRepas = async (indemnRepas, id) => {
    const [result] = await datasource.query("UPDATE structure SET indemnRepas = ? WHERE structureId = ?", [indemnRepas, id])
    return result
}

module.exports = {
    updateDay,
    updateHours,
    updateIndemnRepas,
}
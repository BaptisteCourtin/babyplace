const datasource = require("../../database")

const updateHours = async (heureMin, heureMax, structureId, jourId) => {
    const [result] = await datasource.query("UPDATE horaires SET heureMin = ?, heureMax = ? WHERE structureId = ? AND jourId = ?", [heureMin, heureMax, structureId, jourId])
    return result
}

const updateTarif = async (table, tarif, tarifValue, id) => {
    const [result] = await datasource.query(`UPDATE ${table} SET ${tarif} = ? WHERE structureId = ?`, [tarifValue, id])
    return result
}

const updateIndemn = async (table, indemn, indemnValue, id) => {
    const [result] = await datasource.query(`UPDATE ${table} SET ${indemn} = ? WHERE structureId = ?`, [indemnValue, id])
    return result
}

const updateOptions = async (options, optionsValue, id) => {
    const [result] = await datasource.query(`UPDATE structure SET ${options} = ? WHERE structureId = ?`, [optionsValue, id])
    return result
}

module.exports = {
    updateHours,
    updateTarif,
    updateIndemn,
    updateOptions
}
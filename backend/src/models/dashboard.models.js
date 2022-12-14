const datasource = require("../../database")

const updateDay = async (toggleDay, day, id) => {
    const [result] = await datasource.query(`UPDATE structure SET ${day} = ? WHERE Structure_id = ?`, [toggleDay, id])
    console.log(result)
    return result
}

const updateIndemnRepas = async (indemn_repas, id) => {
    const [result] = await datasource.query("UPDATE structure SET Indemn_repas = ? WHERE Structure_id = ?", [indemn_repas, id])
    return result
}

module.exports = {
    updateDay,
    updateIndemnRepas
}
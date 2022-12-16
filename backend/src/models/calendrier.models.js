const datasource = require('../../database')

const getCalendrier = async (id) => {
    const [result] = await datasource.query("SELECT * FROM calendrier WHERE structureId = ?", [id])
    return result
}

const updateStatus = async (nbPlaces, id) => {
    const [result] = await datasource.query("UPDATE structure SET nbPlaces = -1 WHERE structureId = ?", [id])
    return result
}

const updatePlaces = async (nbPlaces, id) => {
    const [result] = await datasource.query("UPDATE calendrier SET nbPlaces = ? WHERE calendrierId = ?", [nbPlaces, id])
    console.log(result)
    return result
}

module.exports = {
    getCalendrier,
    updatePlaces
};
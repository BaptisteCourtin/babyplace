const datasource = require("../../database");

const getFamille = async () => {
    const [result] = await datasource.query("SELECT familleId FROM famille")
    return result
}

module.exports = {
    getFamille
}
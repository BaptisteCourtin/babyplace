const datasource = require("../../database");

const getCreche = async () => {
    const [result] = await datasource.query("SELECT crecheId FROM creche")
    return result
}

module.exports = {
    getCreche
}
const datasource = require("../../database");

const getAssMat = async () => {
    const [result] = await datasource.query("SELECT assMatId FROM assMat")
    return result
}

module.exports = {
    getAssMat
}
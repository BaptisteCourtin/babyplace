const datasource = require('../../database')

const getStructure = async (req) => {
    const [result] = await datasource.query("SELECT * FROM structure AS s JOIN creche AS c ON s.structure_id=c.structure_id WHERE Token = ?", [req.headers["x-token"]])
    return result
}

module.exports = {
    getStructure
};
const datasource = require('../../database')

const getHoraires = async (req) => {
    const [result] = await datasource.query("SELECT * FROM structure AS s JOIN horaires AS h ON s.structureId=h.structureId WHERE token = ?", [req.headers["x-token"]])
    return result
}

module.exports = {
    getHoraires
};
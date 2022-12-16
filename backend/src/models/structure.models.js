const datasource = require('../../database')

const getStructure = async (req) => {
    const [result] = await datasource.query("SELECT * FROM structure AS s JOIN creche AS c ON s.structure_id=c.structure_id WHERE Token = ?", [req.headers["x-token"]])
    return result
}
const getStructureDataMess = async (req) => {
    const [result] = await datasource.query("SELECT c.creche_id, c.Nom, s.Photo_profil FROM structure AS s JOIN creche AS c ON s.structure_id=c.structure_id")
       return result
}


module.exports = {
    getStructure,
    getStructureDataMess
};
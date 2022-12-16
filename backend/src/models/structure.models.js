const datasource = require("../../database");

const getStructure = async (req) => {
  const [result] = await datasource.query(
    "SELECT * FROM structure AS s JOIN creche AS c ON s.structureId=c.structureId WHERE token = ?",
    [req.headers["x-token"]]
  );
  return result;
};
const getStructureDataMess = async (req) => {
  const [result] = await datasource.query(
    "SELECT c.crecheId, c.nom, s.photoProfil FROM structure AS s JOIN creche AS c ON s.structureId=c.structureId"
  );
  return result;
};

module.exports = {
  getStructure,
  getStructureDataMess,
};

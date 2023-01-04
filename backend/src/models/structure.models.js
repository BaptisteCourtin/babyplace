const datasource = require("../../database");

const getAllStructures = async () => {
  const [result] = await datasource.query(
    "SELECT s.*, s.structureId, c.nom, a.nomUsage, a.nomNaissance, a.prenom, a.indemnKm, a.indemnEntretien FROM structure AS s LEFT JOIN creche AS c ON s.structureId = c.structureId LEFT JOIN assMat AS a ON s.structureId = a.structureId"
    // besoin de s.structureId pour pas de pb d'affichage => sinon creche n'ont pas d'id
    // ne pas prendre tous de c et a
  );
  return result;
};

const getStructure = async (req) => {
  const [result] = await datasource.query(
    "SELECT * FROM structure AS s JOIN assMat AS a ON s.structureId=a.structureId WHERE token = ?",
    [req.headers["x-token"]]
  );
  return result;
};

const logout = async (token, tokenStart, id) => {
  const [result] = await datasource.query("UPDATE structure SET token = ?, tokenStart = ? WHERE structureId = ?", [token, tokenStart, id])
  return result
}

const getStructureDataMess = async (req) => {
  const [result] = await datasource.query(
    "SELECT c.crecheId, c.nom, s.photoProfil FROM structure AS s JOIN creche AS c ON s.structureId=c.structureId"
  );
  return result;
};

module.exports = {
  getStructure,
  getStructureDataMess,
  logout
};

// ; SELECT * FROM structure AS s JOIN assMat AS a ON s.structureId=a.structureId WHERE token = ?

// JOIN creche AS c ON s.structureId=c.structureId
const datasource = require("../../database");

const getAllStructures = async () => {
  const [result] = await datasource.query(
    "SELECT s.*, s.structureId, c.nom, a.nomUsage, a.nomNaissance, a.prenom, a.indemnKm, a.indemnEntretien FROM structure AS s LEFT JOIN creche AS c ON s.structureId = c.structureId LEFT JOIN assMat AS a ON s.structureId = a.structureId"
    // besoin de s.structureId pour pas de pb d'affichage => sinon creche n'ont pas d'id
    // ne pas prendre tous de c et a
  );
  return result;
};

const getStructures = async () => {
  const [result] = await datasource.query("SELECT * FROM structure")
  return result;
}

const getStructure = async (req) => {
  const [result] = await datasource.query(
    "SELECT * FROM structure WHERE token = ?",
    [req.headers["x-token"]]
  );
  return result;
};

const getStructureType = async (id, type) => {
  const [result] = await datasource.query(`SELECT * FROM structure AS s JOIN ${type} AS t ON s.structureId=t.structureId WHERE s.structureId = ?`, [id]);
  return result;
}

const getStructureDetails = async (req, type, id) => {
  const [result] = await datasource.query(`SELECT * FROM ${type} WHERE structureId = ?`, [id])
  return result;
}

const getNotVerified = async () => {
  const [result] = await datasource.query(`SELECT *, s.structureId FROM structure AS s LEFT JOIN creche AS t ON s.structureId = t.structureId LEFT JOIN assMat AS a ON s.structureId=a.structureId WHERE isVerify = 0 OR isSignaled = 1`)
  return result;
}

const updateVerified = async (id) => {
  const [result] = await datasource.query("UPDATE structure SET isVerify = 1, isSignaled = 0 WHERE structureId = ?", [id])
  return result;
}

const deleteRefused = async (id, type) => {
  const [result] = await datasource.query(`DELETE FROM ${type} WHERE structureId = ?; DELETE FROM calendrier WHERE structureId = ?; DELETE FROM horaires WHERE structureID = ?; DELETE FROM structure WHERE structureId = ?`, [id, id, id, id])
  return result;
}

const logout = async (token, tokenStart, id) => {
  const [result] = await datasource.query("UPDATE structure SET token = ?, tokenStart = ? WHERE structureId = ?", [token, tokenStart, id])
  return result
}

const getStructureDataMess = async (req) => {
  const [result] = await datasource.query(
    "SELECT c.crecheId, c.nom, s.photoProfil FROM structure AS s JOIN creche AS c ON s.structureId=c.structureId WHERE s.isVerify = 1"
  );
  return result;
};

module.exports = {
  getStructure,
  getStructures,
  getStructureDetails,
  getStructureType,
  getNotVerified,
  updateVerified,
  deleteRefused,
  getStructureDataMess,
  logout
};

// ; SELECT * FROM structure AS s JOIN assMat AS a ON s.structureId=a.structureId WHERE token = ?

// JOIN creche AS c ON s.structureId=c.structureId
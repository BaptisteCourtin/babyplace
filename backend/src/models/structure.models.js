const datasource = require("../../database");

const getAllStructures = async () => {
  const [result] = await datasource.query(
    "SELECT s.*, s.structureId, c.nom, a.nomUsage, a.nomNaissance, a.prenom, a.indemnKm, a.indemnEntretien, a.animaux, a.nonFumeur, a.zeroPollution, a.repas, a.hygiene FROM structure AS s LEFT JOIN creche AS c ON s.structureId = c.structureId LEFT JOIN assMat AS a ON s.structureId = a.structureId WHERE s.isVerify = 1 AND s.role = 'user'"
    // besoin de s.structureId pour pas de pb d'affichage => sinon creche n'ont pas d'id
  );
  return result;
};

const getStructures = async () => {
  const [result] = await datasource.query("SELECT * FROM structure");
  return result;
};

const getStructureById = async (req) => {
  const [result] = await datasource.query(
    "SELECT structureId, avisCom, avisProprete, avisSecurite, avisEveil, avisHoraires, nbNotes FROM structure WHERE structureId = ?",
    [req.params.id]
  );
  return result;
};

const getStructure = async (req) => {
  const [result] = await datasource.query(
    "SELECT * FROM structure WHERE token = ?",
    [req.headers["x-token"]]
  );
  return result;
};

const getStructureType = async (id, type) => {
  const [result] = await datasource.query(
    `SELECT * FROM structure AS s JOIN ${type} AS t ON s.structureId=t.structureId WHERE s.structureId = ?`,
    [id]
  );
  return result;
};

const getStructureDetails = async (req, type, id) => {
  const [result] = await datasource.query(
    `SELECT * FROM ${type} WHERE structureId = ?`,
    [id]
  );
  return result;
};

const getNotVerified = async () => {
  const [result] = await datasource.query(
    `SELECT *, s.structureId FROM structure AS s LEFT JOIN creche AS t ON s.structureId = t.structureId LEFT JOIN assMat AS a ON s.structureId=a.structureId WHERE isVerify = 0 OR isSignaled = 1`
  );
  return result;
};

const getFavorites = async (id) => {
  const [result] = await datasource.query("SELECT * FROM favoris AS v LEFT JOIN famille AS f ON v.familleId=f.familleId LEFT JOIN parent AS p ON f.familleId=p.familleId WHERE structureIdLiked = ?", [id])
  return result
}

const updateVerified = async (id) => {
  const [result] = await datasource.query(
    "UPDATE structure SET isVerify = 1, isSignaled = 0 WHERE structureId = ?",
    [id]
  );
  return result;
};

const updateImages = async (id, value, file, table) => {
  const [result] = await datasource.query(`UPDATE ${table} SET ${value} = ? WHERE structureId = ?`, [file, id])
  return result;
}

const updateInfos = async (id, table, nom, nomNaissance, nomUsage, prenom, adresse, email, telephone, description) => {
  if (table === 'assMat') {
    const [result] = await datasource.query(`UPDATE assMat SET nomNaissance = ?, nomUsage = ?, prenom = ? WHERE structureId = ?`, [nomNaissance, nomUsage, prenom, id])
    return result;
  } else if (table === 'creche') {
    const [result] = await datasource.query(`UPDATE creche SET nom = ? WHERE structureId = ?`, [nom, id])
    return result;
  }
  const [result] = await datasource.query(`UPDATE structure SET adresse = ?, email = ?, telephone = ?, description = ? WHERE structureId = ?`, [adresse, email, telephone, description, id])
  return result;
}

const updatePwd = async (id, pwd) => {
  const [result] = await datasource.query(`UPDATE structure SET password = ? WHERE structureId = ?`, [pwd, id])
  return result;
}

const deleteRefused = async (id, type) => {
  const [result] = await datasource.query(
    `DELETE FROM ${type} WHERE structureId = ?; DELETE FROM calendrier WHERE structureId = ?; DELETE FROM horaires WHERE structureID = ?; DELETE FROM structure WHERE structureId = ?`,
    [id, id, id, id]
  );
  return result;
};

const logout = async (token, tokenStart, id) => {
  const [result] = await datasource.query(
    "UPDATE structure SET token = ?, tokenStart = ? WHERE structureId = ?",
    [token, tokenStart, id]
  );
  return result;
};

const getStructureDataMess = async (req) => {
  const [result] = await datasource.query(
    "SELECT * FROM structure AS s JOIN creche AS c ON s.structureId=c.structureId WHERE s.isVerify = 1"
  );
  return result;
};

const updateNotes = async (req) => {
  const [result] = await datasource.query(
    `UPDATE structure SET avisCom = ?, avisProprete = ?, avisSecurite = ?, avisEveil = ?, avisHoraires = ?, nbNotes = ? WHERE structureId = ?`,
    [
      req.body.noteCom,
      req.body.noteProprete,
      req.body.noteSecurite,
      req.body.noteEveil,
      req.body.noteHoraires,
      req.body.nbNotes,
      req.params.id,
    ]
  );
  return result;
};

const updateSignal = async (req) => {
  const [result] = await datasource.query(
    `UPDATE structure SET isSignaled = 1 WHERE structureId = ?`,
    [req.params.id]
  );
  return result;
};

module.exports = {
  getStructure,
  getStructures,
  getStructureDetails,
  getStructureType,
  getNotVerified,
  getFavorites,
  updateVerified,
  deleteRefused,
  getStructureDataMess,
  getAllStructures,
  getStructureById,
  updateInfos,
  updatePwd,
  updateNotes,
  updateImages,
  logout,
  updateSignal,
};

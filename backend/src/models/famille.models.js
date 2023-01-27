const datasource = require("../../database");

const getFamille = async () => {
  const [result] = await datasource.query("SELECT familleId FROM famille");
  return result;
};

const getFamilleDataMess = async (req) => {
  const [result] = await datasource.query("SELECT * FROM famille");
  return result;
};

const getPersoConfiance = async (req) => {
  const [result] = await datasource.query(
    "SELECT * FROM personne_confiance WHERE familleId = ?",
    [req.params.id]
  );
  return result;
};

const getDonneesFormInscription = async (req) => {
  const [result] = await datasource.query(
    "SELECT docJustifRevenus, docDeclaRevenus, docSituationPro, docJustifDom, numCaf, numSecu, parentId FROM parent WHERE familleId = ? ;SELECT docAssurParent, docRib, docAutoImage, docDivorce FROM famille WHERE familleId = ?",
    [req.params.id, req.params.id]
  );
  return result;
};

const getPourcent = async (req) => {
  const [result] = await datasource.query(
    "SELECT pourcentFormParent, nom, prenom FROM parent WHERE familleId = ? ; SELECT pourcentFormEnfant FROM enfant WHERE familleId = ? ; SELECT photoProfilFamille FROM famille WHERE familleId = ? ; SELECT pourcentFormInscription FROM famille WHERE familleId = ? ",
    [req.params.id, req.params.id, req.params.id, req.params.id]
  );
  return result;
};

const getLikes = async (req) => {
  const [result] = await datasource.query(
    "SELECT structureIdLiked FROM favoris WHERE familleId = ?",
    [req.params.id]
  );
  return result;
};

const getLikesAndStructure = async (req) => {
  const [result] = await datasource.query(
    "SELECT c.nom, a.nomUsage, a.nomNaissance, a.prenom, s.photoProfil, s.structureId FROM favoris AS f LEFT JOIN creche AS c ON c.structureId = f.structureIdLiked LEFT JOIN assMat AS a ON a.structureId = f.structureIdLiked LEFT JOIN structure AS s ON s.structureId = f.structureIdLiked WHERE familleId = ?",
    [req.params.id]
  );
  return result;
};

const getFamilleInfo = async (req) => {
  const [result] = await datasource.query(
    "SELECT nom, prenom FROM parent WHERE familleId = ? ; SELECT photoProfilFamille FROM famille WHERE familleId = ? ",
    [req.params.id, req.params.id]
  );
  return result;
};

const updatePourcentFormInscr = async (req) => {
  const [result] = await datasource.query(
    `UPDATE famille SET pourcentFormInscription = ? WHERE familleId = ?`,
    [req.body.pourcent, req.params.id]
  );
  return result;
};

const postNewConfiance = async (req) => {
  const { familleId, prenom, nom, tel, email } = req.body;
  const [result] = await datasource.query(
    "INSERT INTO personne_confiance (familleId, prenom, nom, tel, email) VALUES (?, ?, ?, ?, ?)",
    [familleId, prenom, nom, tel, email]
  );
  return result;
};

const postNewLike = async (req) => {
  const [result] = await datasource.query(
    "INSERT INTO favoris (familleId, structureIdLiked) VALUES (?, ?)",
    [parseInt(req.body.familleId), req.body.structureId]
  );
  return result;
};

const deleteConfiance = async (req) => {
  const [result] = await datasource.query(
    "DELETE FROM personne_confiance WHERE confianceId = ?",
    [req.params.id]
  );
  return result;
};

const deleteLike = async (req) => {
  const [result] = await datasource.query(
    "DELETE FROM favoris WHERE familleId = ? AND structureIdLiked = ?",
    [req.query.familleId, req.query.structureId]
  );
  return result;
};

const nullOneDocFormCommun = async (req) => {
  const [result] = await datasource.query(
    `UPDATE famille SET ${req.body.nomFichier} = NULL WHERE familleId = ?`,
    [req.params.id]
  );
  return result;
};

const deco = async (req) => {
  const [result] = await datasource.query(
    `UPDATE famille SET token = NULL, tokenStart = NULL WHERE familleId = ?`,
    [req.params.id]
  );
  return result;
};

module.exports = {
  getPersoConfiance,
  getFamille,
  getPourcent,
  getLikes,
  getDonneesFormInscription,
  getFamilleDataMess,
  deleteConfiance,
  postNewConfiance,
  getFamilleInfo,
  nullOneDocFormCommun,
  updatePourcentFormInscr,
  deleteLike,
  postNewLike,
  getLikesAndStructure,
  deco,
};

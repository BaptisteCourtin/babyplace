const datasource = require("../../database");

const getNomsEtIdEnfants = async (req) => {
  const [result] = await datasource.query(
    "SELECT prenom, enfantId FROM enfant WHERE familleId = ?",
    [req.params.id]
  );
  return result;
};

const getNomsEtIdEnfants100 = async (req) => {
  const [result] = await datasource.query(
    "SELECT prenom, enfantId FROM enfant WHERE familleId = ? AND pourcentFormEnfant = 100",
    [req.params.id]
  );
  return result;
};

const getDonneesFormEnfant = async (req) => {
  const [[result]] = await datasource.query(
    "SELECT nom, prenom, dateNaissance, marcheur, allergies, medecin FROM enfant WHERE enfantId = ?",
    [req.params.id]
  );
  return result;
};

const updateFormEnfant = async (req) => {
  const { nom, prenom, dateNaissance, marcheur, allergies, medecin } =
    req.body.initialData;
  const [result] = await datasource.query(
    `UPDATE enfant SET nom = ? , prenom = ? , dateNaissance = ? , marcheur = ? , allergies = ? , medecin = ? , pourcentFormEnfant = ? WHERE enfantId = ?`,
    [
      nom,
      prenom,
      dateNaissance,
      marcheur,
      allergies,
      medecin,
      req.body.pourcent,
      req.params.id,
    ]
  );
  return result;
};

const postNewEnfant = async (req) => {
  const [result] = await datasource.query(
    "INSERT INTO enfant (familleId) VALUES (?)",
    [req.body.familleId]
  );
  return result;
};

const deleteEnfant = async (req) => {
  const [result] = await datasource.query(
    "DELETE FROM enfant WHERE enfantId = ?",
    [req.params.id]
  );
  return result;
};

module.exports = {
  getNomsEtIdEnfants,
  getNomsEtIdEnfants100,
  getDonneesFormEnfant,
  updateFormEnfant,
  postNewEnfant,
  deleteEnfant,
};

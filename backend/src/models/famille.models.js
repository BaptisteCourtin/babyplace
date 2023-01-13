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

const getDonneesFormParent = async (req) => {
  const [result] = await datasource.query(
    "SELECT p.nom, p.prenom, p.profession, p.email, p.telephone, p.adresse, p.parentId FROM famille AS f INNER JOIN parent AS p ON f.familleId=p.familleId WHERE f.familleId = ?",
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

const getDonneesFormInscription = async (req) => {
  const [result] = await datasource.query(
    "SELECT p.docJustifRevenus, p.docDeclaRevenus, p.docSituationPro, p.docJustifDom, p.numCaf, p.numSecu, p.parentId, f.docAssurParent, f.docRib, f.docAutoImage, f.docDivorce FROM famille AS f INNER JOIN parent AS p ON f.familleId=p.familleId WHERE f.familleId = ?",
    [req.params.id]
  );
  return result;
};

const getPourcent = async (req) => {
  const [result] = await datasource.query(
    "SELECT pourcentFormParent FROM parent WHERE familleId = ? ; SELECT pourcentFormEnfant FROM enfant WHERE familleId = ? ",
    [req.params.id, req.params.id]
  );
  return result;
};

const getNomsEtIdEnfants = async (req) => {
  const [result] = await datasource.query(
    "SELECT prenom, enfantId FROM enfant WHERE familleId = ?",
    [req.params.id]
  );
  return result;
};

const updateFormParent = async (req) => {
  const { nom, prenom, profession, telephone, email, adresse } = req.body;

  const [result] = await datasource.query(
    `UPDATE parent SET nom = ? , prenom = ? , profession = ? , telephone = ? , email = ? , adresse = ? , pourcentFormParent = ? WHERE parentId = ?`,
    [
      nom,
      prenom,
      profession,
      telephone,
      email,
      adresse,

      parseInt(req.body.pourcent),
      parseInt(req.params.id),
    ]
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

const postReservation = async (req) => {
  const {
    structureId,
    enfantId,
    prixTotal,
    dateArrivee,
    heureArrivee,
    dateDepart,
    heureDepart,
  } = req.body;

  const [result] = await datasource.query(
    "INSERT INTO reservation (structureId, enfantId, prixTotal, dateArrivee, heureArrivee, dateDepart, heureDepart) VALUES (?, ?, ?, ?, ?, ?, ?)",

    [
      structureId,
      enfantId,
      prixTotal,
      dateArrivee,
      heureArrivee,
      dateDepart,
      heureDepart,
    ]
  );
  return result;
};

const postNewEnfant = async (req) => {
  const [result] = await datasource.query(
    "INSERT INTO enfant (familleId, prenom) VALUES (?, ?)",
    [req.body.familleId, req.body.prenom]
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
  getPersoConfiance,
  postReservation,
  getDonneesFormParent,
  getFamille,
  updateFormParent,
  updateFormEnfant,
  getDonneesFormEnfant,
  getPourcent,
  getNomsEtIdEnfants,
  postNewEnfant,
  deleteEnfant,
  getDonneesFormInscription,
  getFamilleDataMess
};

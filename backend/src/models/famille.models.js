const datasource = require("../../database");

const getFamille = async () => {
  const [result] = await datasource.query("SELECT familleId FROM famille");
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
  const [[result]] = await datasource.query(
    "SELECT nom1, nom2, prenom1, prenom2, profession1, profession2, email1, email2, telephone1, telephone2, adresse1, adresse2 FROM parent WHERE parentId = ?",
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

const updateFormParent = async (req) => {
  const {
    nom1,
    prenom1,
    profession1,
    telephone1,
    email1,
    adresse1,

    nom2,
    prenom2,
    profession2,
    telephone2,
    email2,
    adresse2,
  } = req.body.initialData;

  const [result] = await datasource.query(
    `UPDATE parent SET nom1 = ? , prenom1 = ? , profession1 = ? , telephone1 = ? , email1 = ? , adresse1 = ? , nom2 = ? , prenom2 = ? , profession2 = ? , telephone2 = ? , email2 = ? , adresse2 = ? WHERE parentId = ?`,
    [
      nom1,
      prenom1,
      profession1,
      telephone1,
      email1,
      adresse1,

      nom2,
      prenom2,
      profession2,
      telephone2,
      email2,
      adresse2,

      req.params.id,
    ]
  );
  return result;
};

const updateFormEnfant = async (req) => {
  const { nom, prenom, dateNaissance, marcheur, allergies, medecin } =
    req.body.initialData;

  const [result] = await datasource.query(
    `UPDATE enfant SET nom = ? , prenom = ? , dateNaissance = ? , marcheur = ? , allergies = ? , medecin = ? WHERE enfantId = ?`,
    [nom, prenom, dateNaissance, marcheur, allergies, medecin, req.params.id]
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

module.exports = {
  getPersoConfiance,
  postReservation,
  getDonneesFormParent,
  getFamille,
  updateFormParent,
  updateFormEnfant,
  getDonneesFormEnfant,
};

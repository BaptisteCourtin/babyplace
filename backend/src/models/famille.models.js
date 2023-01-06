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
    "SELECT p.nom1, p.nom2, p.prenom1, p.prenom2, p.profession1, p.profession2, p.email1, p.email2, p.telephone1, p.telephone2, p.adresse1, p.adresse2 FROM famille AS f LEFT JOIN parent AS p ON f.familleId = p.familleId WHERE f.familleId = ?",
    [req.params.id]
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
};

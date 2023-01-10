const datasource = require("../../database");

const getFamille = async () => {
  const [result] = await datasource.query("SELECT familleId FROM famille")
  return result
}

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
  getFamille,
  getFamilleDataMess

};

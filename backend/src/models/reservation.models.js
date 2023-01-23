const datasource = require("../../database");

const getReser = async (id) => {
  const [result] = await datasource.query(
    "SELECT * FROM reservation WHERE structureId = ?",
    [id]
  );
  return result;
};

const getReservationAR = async (req) => {
  const [result] = await datasource.query(
    "SELECT r.dateArrivee, r.dateDepart, r.heureArrivee, r.heureDepart, r.isOccasionnel, r.status, r.prixTotal, e.nom, e.prenom, c.nom AS crecheNom, a.nomUsage AS assMatNomUsage, a.nomNaissance AS assMatNomNaissance, a.prenom AS assMatPrenom, s.photoProfil FROM reservation AS r INNER JOIN enfant AS e ON e.enfantId = r.enfantId LEFT JOIN creche AS c ON c.structureId = r.structureId LEFT JOIN assMat AS a ON a.structureId = r.structureId LEFT JOIN structure AS s ON s.structureId=r.structureId WHERE r.familleId = ? AND (status = 'approved' OR status = 'refused')",
    [req.params.id]
  );
  return result;
};

const updateStatus = async (status, id) => {
  const [result] = await datasource.query(
    "UPDATE reservation SET status = ? WHERE id = ?",
    [status, id]
  );
  return result;
};

const postReservation = async (req) => {
  const {
    structureId,
    familleId,
    enfantId,
    prixTotal,
    isOccasionnel,
    dateArrivee,
    heureArrivee,
    dateDepart,
    heureDepart,
  } = req.body;

  const [result] = await datasource.query(
    "INSERT INTO reservation (structureId, enfantId, prixTotal, isOccasionnel, dateArrivee, heureArrivee, dateDepart, heureDepart, familleId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ; INSERT INTO notifications (structureId , enfantId ) VALUES (?, ?)",
    [
      structureId,
      enfantId,
      prixTotal,
      isOccasionnel,
      dateArrivee,
      heureArrivee,
      dateDepart,
      heureDepart,
      familleId,

      structureId,
      enfantId,
    ]
  );
  return result;
};

module.exports = {
  getReser,
  getReservationAR,
  updateStatus,
  postReservation,
};

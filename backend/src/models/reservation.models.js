const datasource = require("../../database");

const getReser = async (id) => {
  const [result] = await datasource.query(
    "SELECT * FROM reservation AS r INNER JOIN enfant AS e ON e.enfantId=r.enfantId WHERE structureId = ? AND status != 'toNote'", [id],
  );
  return result;
};

const getApprovedReser = async (id) => {
  const [result] = await datasource.query(
    "SELECT reservation.id FROM reservation WHERE structureId = ? AND status = 'approved'", [id]
  )
  return result;
}

const updateStatus = async (status, id) => {
  const [result] = await datasource.query(
    "UPDATE reservation SET status = ? WHERE id = ?",
    [status, id]
  );
  return result;
};

const updateResaToNote = async (req) => {
  // update toNote quand payed ET (occas et dépassé de 1)
  // update toNote quand payed ET (pas occas et dépassé de 5)
  const [result] = await datasource.query(
    "UPDATE reservation SET status = 'toNote' WHERE familleId = ? AND status='payed' AND ((isOccasionnel=1 AND (jour < (CURDATE() - INTERVAL 1 DAY))) OR (isOccasionnel=0 AND (dateArrivee < (CURDATE() - INTERVAL 5 DAY))) )",
    [req.params.id]
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
    jour,
    heureArrivee,
    heureDepart,
    heureTotal,
  } = req.body;

  const [result] = await datasource.query(
    "INSERT INTO reservation (structureId, enfantId, prixTotal, isOccasionnel, jour, heureArrivee, heureDepart, familleId, heureTotal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ; INSERT INTO notifications (structureId , enfantId ) VALUES (?, ?)",
    [
      structureId,
      enfantId,
      prixTotal,
      isOccasionnel,
      jour,
      heureArrivee,
      heureDepart,
      familleId,
      heureTotal,

      structureId,
      enfantId,
    ]
  );
  return result;
};

const deleteResa = async (req) => {
  const [result] = await datasource.query(
    "DELETE FROM reservation WHERE id = ?",
    [req.params.id]
  );
  return result;
};

const deleteResaByDate = async (req) => {
  // delete quand ocass ET (pas toNote et dépassé de 1) OU (toNote et dépassé de 5)
  // delete quand pas ocass ET (pas toNote et dépassé de 1) OU (toNote et dépassé de 5)
  const [result] = await datasource.query(
    "DELETE FROM reservation WHERE familleId = ? AND ((isOccasionnel=1  AND ((status!='toNote' AND (jour < (CURDATE() - INTERVAL 1 DAY)))OR (jour < (CURDATE() - INTERVAL 5 DAY)))) OR (isOccasionnel=0 AND dateDepart!='NULL' AND ((status!='toNote' AND (dateDepart < (CURDATE() - INTERVAL 1 DAY))) OR (dateDepart < (CURDATE() - INTERVAL 5 DAY)))))",
    [req.params.id]
  );
  return result;
};

const updateDates = async (id, dateStart, dateEnd) => {
  const [result] = await datasource.query("UPDATE reservation SET dateArrivee = ?, dateDepart = ?, status = 'approved' WHERE id= ?", [dateStart, dateEnd, id])
  return result
}

module.exports = {
<<<<<<< HEAD
  getReser,
  getApprovedReser,
  updateStatus,
  updateDates
}
=======
  getReser,
  getReservationAR,
  getReservationPayed,
  updateStatus,
  postReservation,
  deleteResa,
  updateResaToNote,
  deleteResaByDate,
};
>>>>>>> 686052b0c4488ba9730c343f86ba9f852718b9a7

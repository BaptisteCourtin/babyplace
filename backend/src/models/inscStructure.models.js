const datasource = require("../../database");

const getIsCreche = (email) => {
  return datasource.query("SELECT isCreche FROM structure WHERE email = ?", [
    email,
  ]);
};

const getStructureInfo = (table, email) => {
  return datasource.query(
    `SELECT * FROM structure INNER JOIN ${table} ON ${table}.structureId=structure.structureId WHERE email = ?`,
    [email]
  );
};

const getStructureId = (email) => {
  return datasource.query("SELECT structureId from structure where email=?", [
    email,
  ]);
};

const structureExist = (table, email) => {
  return datasource.query(
    `SELECT ${table}.structureId FROM structure INNER JOIN ${table} ON ${table}.structureId=structure.structureId WHERE email = ?`,
    [email]
  );
};

const inscriptionStructure1 = (
  isCreche,
  adresseStructure,
  telephone,
  email
) => {
  return datasource.query(
    "UPDATE structure SET isCreche = ?, adresse = ?, telephone= ? WHERE email= ?",
    [isCreche, adresseStructure, telephone, email]
  );
};

const getPhotoProfil = (id) => {
  return datasource.query(
    "SELECT photoProfil FROM structure WHERE structureId= ?",
    [id]
  );
};

const updatePhotoProfil = (photoProfil, email) => {
  return datasource.query(
    "UPDATE structure SET photoProfil= ? WHERE email= ?",
    [photoProfil, email]
  );
};

const getPhotosStructure = (id) => {
  return datasource.query(
    "SELECT photoStructure1, photoStructure2, photoStructure3 FROM structure WHERE structureId= ?",
    [id]
  );
};

const updatePhotosStructure = (column, photoStructure, email) => {
  return datasource.query(`UPDATE structure SET ${column}= ?  WHERE email= ?`, [
    photoStructure,
    email,
  ]);
};

const updateDescription = (description, email) => {
  return datasource.query(
    "UPDATE structure SET description = ? WHERE email= ?",
    [description, email]
  );
};

const calendrierExist = (id) => {
  return datasource.query(
    "SELECT calendrier.date FROM calendrier WHERE structureId= ? AND nbPlaces=-1",
    [id]
  );
};

const horairesExist = (id) => {
  return datasource.query("SELECT * FROM horaires WHERE structureId= ?", [id]);
};

const resaInst = (resaInst, email) => {
  return datasource.query("UPDATE structure SET resaInst = ? WHERE email= ?", [
    resaInst,
    email,
  ]);
};

const createHoraires = (jour, numero, ouvert, min, max, structureId) => {
  return datasource.query(
    `INSERT INTO horaires(jourSemaine, ouvert, heureMin, heureMax, jourId, structureId) VALUES('${jour}', ?, ?, ?, ${numero}, ?)`,
    [ouvert, min, max, structureId]
  );
};

const updateHoraires = (numero, ouvert, min, max, structureId) => {
  return datasource.query(
    `UPDATE horaires SET ouvert=?, heureMin=?, heureMax=? WHERE jourId=${numero} AND structureId=?`,
    [ouvert, min, max, structureId]
  );
};

const dureeAccueil = (dureeMin, dureeMax, email) => {
  return datasource.query(
    "UPDATE structure SET dureeMin = ?, dureeMax = ? WHERE email= ?",
    [dureeMin, dureeMax, email]
  );
};

const deleteDate = (structureId, date) => {
  return datasource.query(
    "DELETE FROM calendrier WHERE structureId= ? AND date = ?",
    [structureId, date]
  );
};

module.exports = {
  getIsCreche,
  getStructureInfo,
  getStructureId,
  structureExist,
  inscriptionStructure1,
  getPhotoProfil,
  updatePhotoProfil,
  getPhotosStructure,
  updatePhotosStructure,
  updateDescription,
  calendrierExist,
  horairesExist,
  resaInst,
  createHoraires,
  updateHoraires,
  dureeAccueil,
  deleteDate,
};

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

const createCreche = (typeCreche, nomStructure, structureId) => {
  return datasource.query(
    "INSERT INTO creche(type, nom, structureId) VALUES(?,?,?)",
    [typeCreche, nomStructure, structureId]
  );
};

const updateCreche1 = (
  isCreche,
  adresseStructure,
  telephone,
  typeCreche,
  nomStructure,
  email
) => {
  return datasource.query(
    "UPDATE structure INNER JOIN creche ON creche.structureId=structure.structureId SET isCreche = ?, adresse = ?, telephone= ?, type=?, nom=? WHERE email= ?",
    [isCreche, adresseStructure, telephone, typeCreche, nomStructure, email]
  );
};

const createAssmat = (nomNaissance, nomUsage, prenom, structureId) => {
  return datasource.query(
    "INSERT INTO assMat(nomNaissance, nomUsage, prenom, structureId) VALUES(?,?,?,?)",
    [nomNaissance, nomUsage, prenom, structureId]
  );
};

const updateAssmat1 = (
  isCreche,
  adresseStructure,
  telephone,
  nomNaissance,
  nomUsage,
  prenom,
  email
) => {
  return datasource.query(
    "UPDATE structure INNER JOIN assMat ON assMat.structureId=structure.structureId SET isCreche = ?, adresse = ?, telephone= ?, nomNaissance=?, nomUsage=?, prenom=? WHERE email= ?",
    [
      isCreche,
      adresseStructure,
      telephone,
      nomNaissance,
      nomUsage,
      prenom,
      email,
    ]
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

const optionsAccueilCreche = (
  PCSC1,
  nesting,
  montessori,
  handi,
  jardin,
  sorties,
  promenades,
  eveil,
  musique,
  art,
  bilingue,
  bibli,
  transport,
  albumPhoto,
  photoConnecte,
  email
) => {
  return datasource.query(
    "UPDATE structure INNER JOIN creche ON creche.structureId = structure.structureId SET PCSC1=?, nesting=?, montessori=?, handi=?, jardin=?, sorties=?, promenades=?, eveil=?, musique=?, art=?, bilingue=?, bibli=?, transport=?, albumPhoto=?, photoConnecte=? WHERE email= ?",
    [
      PCSC1,
      nesting,
      montessori,
      handi,
      jardin,
      sorties,
      promenades,
      eveil,
      musique,
      art,
      bilingue,
      bibli,
      transport,
      albumPhoto,
      photoConnecte,
      email,
    ]
  );
};

const optionsAccueilAssmat = (
  PCSC1,
  nesting,
  montessori,
  handi,
  jardin,
  sorties,
  promenades,
  eveil,
  musique,
  art,
  bilingue,
  bibli,
  transport,
  enfants,
  experience,
  animaux,
  nonFumeur,
  zeroPollution,
  repas,
  hygiene,
  albumPhoto,
  photoConnecte,
  email
) => {
  return datasource.query(
    "UPDATE structure INNER JOIN assMat ON assMat.structureId = structure.structureId SET PCSC1=?, nesting=?, montessori=?, handi=?, jardin=?, sorties=?, promenades=?, eveil=?, musique=?, art=?, bilingue=?, bibli=?, transport=?, enfants=?, experience=?, animaux=?, nonFumeur=?, zeroPollution=?, repas=?, hygiene=?, albumPhoto=?, photoConnecte=? WHERE email= ?",
    [
      PCSC1,
      nesting,
      montessori,
      handi,
      jardin,
      sorties,
      promenades,
      eveil,
      musique,
      art,
      bilingue,
      bibli,
      transport,
      enfants,
      experience,
      animaux,
      nonFumeur,
      zeroPollution,
      repas,
      hygiene,
      albumPhoto,
      photoConnecte,
      email,
    ]
  );
};

const resaInst = (resaInst, email) => {
  return datasource.query("UPDATE structure SET resaInst = ? WHERE email= ?", [
    resaInst,
    email,
  ]);
};

const createHoraires = (jour, numero, ouvert, min, max, structureId) => {
  return datasource.query(
    `INSERT INTO horaires(jourSemaine, ouvert, heureMin, heureMax, jourId, structureId) VALUES(${jour}, ?, ?, ?, ${numero}, ?)`,
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

const agrementsCreche = (
  nbEmployes,
  maxPlaces,
  maxHandi,
  max18Mois,
  maxNuit,
  email
) => {
  return datasource.query(
    "UPDATE structure INNER JOIN creche ON creche.structureId=structure.structureId SET nbEmployes= ?, maxPlaces= ?, maxHandi= ?, max18Mois= ?, maxNuit= ? WHERE email= ?",
    [nbEmployes, maxPlaces, maxHandi, max18Mois, maxNuit, email]
  );
};

const agrementsAssmat = (maxPlaces, maxHandi, max18Mois, maxNuit, email) => {
  return datasource.query(
    "UPDATE structure INNER JOIN assMat ON assMat.structureId=structure.structureId SET maxPlaces= ?, maxHandi= ?, max18Mois= ?, maxNuit= ? WHERE email= ?",
    [maxPlaces, maxHandi, max18Mois, maxNuit, email]
  );
};

const tarifsCreche = (
  financementPaje,
  tarifHeure,
  tarifHoraireSpec,
  indemnRepas,
  tarifAtelier,
  email
) => {
  return datasource.query(
    "UPDATE structure INNER JOIN creche ON creche.structureId=structure.structureId SET financementPaje = ?, tarifHeure= ?, tarifHoraireSpec= ?, indemnRepas= ?, tarifAtelier= ?  WHERE email= ?",
    [
      financementPaje,
      tarifHeure,
      tarifHoraireSpec,
      indemnRepas,
      tarifAtelier,
      email,
    ]
  );
};

const tarifsAssmat = (
  tarifHeure,
  tarifHoraireSpec,
  indemnRepas,
  indemnKm,
  indemnEntretien,
  tarifHeureSup,
  email
) => {
  return datasource.query(
    "UPDATE structure INNER JOIN assMat ON assMat.structureId=structure.structureId SET tarifHeure= ?, tarifHoraireSpec= ?, indemnRepas= ?, indemnKm= ?, indemnEntretien= ?, tarifHeureSup= ? WHERE email= ?",
    [
      tarifHeure,
      tarifHoraireSpec,
      indemnRepas,
      indemnKm,
      indemnEntretien,
      tarifHeureSup,
      email,
    ]
  );
};

module.exports = {
  getIsCreche,
  getStructureInfo,
  getStructureId,
  structureExist,
  inscriptionStructure1,
  createCreche,
  updateCreche1,
  createAssmat,
  updateAssmat1,
  getPhotoProfil,
  updatePhotoProfil,
  getPhotosStructure,
  updatePhotosStructure,
  updateDescription,
  calendrierExist,
  horairesExist,
  optionsAccueilCreche,
  optionsAccueilAssmat,
  resaInst,
  createHoraires,
  updateHoraires,
  dureeAccueil,
  deleteDate,
  agrementsCreche,
  agrementsAssmat,
  tarifsCreche,
  tarifsAssmat,
};

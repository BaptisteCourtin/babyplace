const datasource = require("../../database");

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

const agrementsAssmat = (maxPlaces, maxHandi, max18Mois, maxNuit, email) => {
  return datasource.query(
    "UPDATE structure INNER JOIN assMat ON assMat.structureId=structure.structureId SET maxPlaces= ?, maxHandi= ?, max18Mois= ?, maxNuit= ? WHERE email= ?",
    [maxPlaces, maxHandi, max18Mois, maxNuit, email]
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

const updateJustificatif = (column, doc, email) => {
  return datasource.query(
    `UPDATE structure INNER JOIN assMat ON assMat.structureId = structure.structureId SET ${column}= ?  WHERE email= ?`,
    [doc, email]
  );
};

const verifsAssmat = (
  numSecu,
  numAgrement,
  dateAgrement,
  assHabitNom,
  assHabitNumero,
  assHabitAdresse,
  assAutoNom,
  assAutoNumero,
  assAutoAdresse,
  email
) => {
  return datasource.query(
    "UPDATE structure INNER JOIN assMat ON assMat.structureId=structure.structureId SET numSecu= ?, numAgrement= ?, dateAgrement= ?, assHabitNom= ?, assHabitNumero= ?, assHabitAdresse= ?, assAutoNom= ?, assAutoNumero= ?, assAutoAdresse= ? WHERE email= ?",
    [
      numSecu,
      numAgrement,
      dateAgrement,
      assHabitNom,
      assHabitNumero,
      assHabitAdresse,
      assAutoNom,
      assAutoNumero,
      assAutoAdresse,
      email,
    ]
  );
};

module.exports = {
  createAssmat,
  updateAssmat1,
  optionsAccueilAssmat,
  agrementsAssmat,
  tarifsAssmat,
  updateJustificatif,
  verifsAssmat,
};

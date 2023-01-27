const datasource = require("../../database");

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

const verifsCreche = (numAgrement, dateAgrement, siret, email) => {
  return datasource.query(
    "UPDATE structure INNER JOIN creche ON creche.structureId=structure.structureId SET numAgrement= ?, dateAgrement= ?, siret= ?  WHERE email= ?",
    [numAgrement, dateAgrement, siret, email]
  );
};

module.exports = {
  createCreche,
  updateCreche1,
  optionsAccueilCreche,
  agrementsCreche,
  tarifsCreche,
  verifsCreche,
};

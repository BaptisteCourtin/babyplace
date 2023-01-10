const datasource = require("../../database");

const postFormInscription = async (req) => {
  const [result] = await datasource.query(
    "INSERT INTO enfant (familleId, prenom) VALUES (?, ?)",
    [
      { name: "docpmi", maxCount: 1 },
      { name: "docIdentite", maxCount: 1 },
      { name: "docVitale", maxCount: 1 },
      { name: "docJustifDom", maxCount: 1 },
      { name: "docDiplome", maxCount: 1 },
      { name: "docRespCivile", maxCount: 1 },
      { name: "docAssAuto", maxCount: 1 },
    ]
  );
  return result;
};

module.exports = {
  postFormInscription,
};

const datasource = require("../../database");

const getDonneesFormParent = async (req) => {
  const [result] = await datasource.query(
    "SELECT p.nom, p.prenom, p.profession, p.email, p.telephone, p.adresse, p.parentId FROM famille AS f INNER JOIN parent AS p ON f.familleId=p.familleId WHERE f.familleId = ?",
    [req.params.id]
  );
  return result;
};

const updateFormParent = async (req) => {
  const { nom, prenom, profession, telephone, email, adresse } = req.body;
  const [result] = await datasource.query(
    `UPDATE parent SET nom = ? , prenom = ? , profession = ? , telephone = ? , email = ? , adresse = ? , pourcentFormParent = ? WHERE parentId = ?`,
    [
      nom,
      prenom,
      profession,
      telephone,
      email,
      adresse,

      parseInt(req.body.pourcent),
      parseInt(req.params.id),
    ]
  );
  return result;
};

const nullOneDocFormParent = async (req) => {
  const [result] = await datasource.query(
    `UPDATE parent SET ${req.body.nomFichier} = NULL WHERE parentId = ?`,
    [req.params.id]
  );
  return result;
};

module.exports = {
  getDonneesFormParent,
  updateFormParent,
  nullOneDocFormParent,
};

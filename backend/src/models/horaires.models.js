const datasource = require("../../database");

const getHorairesById = async (id) => {
  const [result] = await datasource.query(
    "SELECT * FROM horaires WHERE structureId = ? ORDER BY jourId",
    [id]
  );
  return result;
};

const updateDay = async (id, value) => {
  const [result] = await datasource.query(
    `UPDATE horaires SET ouvert = ? WHERE horairesId = ?`,
    [value, id]
  );
  return result;
};

module.exports = {
  updateDay,
  getHorairesById,
};

const datasource = require("../../database");

const getHorairesById = async (id) => {
  const [result] = await datasource.query(
    "SELECT * FROM horaires WHERE structureId = ? ORDER BY jourId",
    [id]
  );
  return result;
};

const updateDay = async (id, structureId, value) => {
  const [result] = await datasource.query(
    `UPDATE horaires SET ouvert = ? WHERE jourId = ? AND structureId = ?`,
    [value, id, structureId]
  );
  return result;
};

module.exports = {
  updateDay,
  getHorairesById,
};

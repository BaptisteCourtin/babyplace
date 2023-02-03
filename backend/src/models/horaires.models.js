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

const updateOpen = async (id, heureMin, heureMax) => {
  const [result] = await datasource.query(
    `UPDATE horaires SET ouvert = 1, heureMin = ?, heureMax = ? WHERE horairesId = ?`, [heureMin, heureMax, id]
  )
  return result
}

const updateClose = async (id) => {
  const [result] = await datasource.query(
    "UPDATE horaires SET ouvert = 0, heureMin = NULL, heureMax = NULL WHERE horairesId = ?", [id]
  )
  return result
}

module.exports = {
  updateDay,
  updateOpen,
  updateClose,
  getHorairesById,
};

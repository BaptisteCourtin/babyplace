const datasource = require("../../database");

const getReser = async (id) => {
    const [result] = await datasource.query(
        "SELECT * FROM reservation WHERE structureId = ?", [id],
    );
    return result;
};

const updateStatus = async (status, id) => {
    const [result] = await datasource.query("UPDATE reservation SET status = ? WHERE id = ?", [status, id])
    return result
}

module.exports = {
    getReser,
    updateStatus
}
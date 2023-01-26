const datasource = require("../../database");

const getReser = async (id) => {
    const [result] = await datasource.query(
        "SELECT * FROM reservation AS r INNER JOIN enfant AS e ON e.enfantId=r.enfantId WHERE structureId = ? AND status != 'toNote'", [id],
    );
    return result;
};

const getApprovedReser = async (id) => {
    const [result] = await datasource.query(
        "SELECT reservation.id FROM reservation WHERE structureId = ? AND status = 'approved'", [id]
    )
    return result;
}

const updateStatus = async (status, id) => {
    const [result] = await datasource.query("UPDATE reservation SET status = ? WHERE id = ?", [status, id])
    return result
}

const updateDates = async (id, dateStart, dateEnd) => {
    const [result] = await datasource.query("UPDATE reservation SET dateArrivee = ?, dateDepart = ?, status = 'approved' WHERE id= ?", [dateStart, dateEnd, id])
    return result
}

module.exports = {
    getReser,
    getApprovedReser,
    updateStatus,
    updateDates
}
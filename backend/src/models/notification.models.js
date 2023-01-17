const datasource = require("../../database");

const getNotifications = async (id) => {
    const [result] = await datasource.query("SELECT * FROM notifications WHERE structureId = ?", [id])
    return result
}

const deleteNotification = async (id) => {
    const [result] = await datasource.query("DELETE FROM notifications WHERE notifId = ?", [id])
    return result
}

module.exports = {
    getNotifications,
    deleteNotification
}
const notificationsModels = require("../models/notification.models.js");

const getNotifications = async (req, res) => {
    const { id } = req.params
    const result = await notificationsModels.getNotifications(id)
    return res.json(result)
}

const deleteNotification = async (req, res) => {
    const { id } = req.params
    const result = await notificationsModels.deleteNotification(id)
    if (result.affectedRows === 0) {
        res.status(404).send("Not found")
    } else {
        res.sendStatus(204)
    }
}

module.exports = {
    getNotifications,
    deleteNotification
}
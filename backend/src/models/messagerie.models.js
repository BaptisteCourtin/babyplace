const datasource = require("../../database");

const getAllMessageFromDb = async (req) => {
    const [result] = await datasource.query(
        "SELECT * FROM message_room WHERE room=?",
        [req.headers.room]
    );
    return result;
};

const saveMessageInDb = async (req) => {
    const { room, author, message, date } = req.body;
    const [result] = await datasource.query(
        "INSERT INTO message_room (room, author, message, time) VALUES ( ? , ? , ?, ?)", [room, author, message, date])
    return result;
};

module.exports = {
    getAllMessageFromDb,
    saveMessageInDb
}
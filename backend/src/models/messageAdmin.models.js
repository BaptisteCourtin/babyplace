const datasource = require("../../database");

const postMessageToAdmin = async (req) => {
    const [result] = await datasource.query(
        "INSERT INTO message_for_admin (prenom, nom, email, optionSelected, texte) VALUES (?, ?, ?, ?, ?)",
        [req.body.prenom, req.body.nom, req.body.email, req.body.optionSelected, req.body.texte]
    );
    return result;
};
const getAllMessageToAdmin = async () => {
    const [result] = await datasource.query(
        "SELECT * FROM message_for_admin");
    return result
};

module.exports = {
    postMessageToAdmin,
    getAllMessageToAdmin
};
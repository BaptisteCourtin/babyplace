const mailerServices = require('../services/nodemailer/mailer.services');

const sendResponseByMail = (req, res) => {
    try {
        const { objet, message, selectedMail } = req.body;
        mailerServices.EmailSender(objet, message, selectedMail);
        res.json({ msg: "server" });
    } catch (error) {
        res.status(404).json({ msg: "Something Bad Appened" });
    }
};

module.exports = {
    sendResponseByMail
}
const sendResponseByMail = require('./mailer.services');

const emailSender = async (req, res) => {
    const { objet, message, selectedMail, selectedNom, selectedPrenom, selectedOption, selectedMessage } = req.body;
    try {
        let result = await sendResponseByMail(objet, message, selectedMail, selectedNom, selectedPrenom, selectedOption, selectedMessage);
        console.log(result);
        res.status(200).json({ sucess: true, msg: "email sent" });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    emailSender
};
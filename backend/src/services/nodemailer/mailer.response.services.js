const sendResponseByMail = require('./mailer.services');

const emailSender = async (req, res) => {
    const { objet, message, selectedMail } = req.body;
    console.log(objet, message, selectedMail);
    try {
        let result = await sendResponseByMail(objet, message, selectedMail);
        console.log(result.data);
        res.status(200).json({ sucess: true, msg: "email sent" });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

module.exports = {
    emailSender
};
require("dotenv").config();

const adminTemplate = require("./mail_templates/admin.template.services");
const confirmationTemplate = require("./mail_templates/confirmation.template.services");
const refuseTemplate = require("./mail_templates/refuse.template.services");

const transporter = require("./transporteur.services");

const sendResponseByMail = async (
    objet,
    message,
    selectedMail,
    selectedNom,
    selectedPrenom,
    selectedOption,
    selectedMessage
) => {
    transporter.sendMail(
        {
            from: process.env.SMTP_USER,
            to: selectedMail,
            subject: objet,
            text: message,
            html: adminTemplate(selectedPrenom, selectedNom, selectedOption, selectedMessage, message),
        },
        (err, info) => {
            if (err) console.log(err);
            else {
                console.log("Email sent successfully");
                console.log("Message ID : ", info.messageId);
            }
        }
    );
};

const sendConfirmationByMail = async (email) => {
    transporter.sendMail(
        {
            from: process.env.SMTP_USER,
            to: email,
            subject: `Acceptation de votre demande`,
            text: "Nous sommes ravis de vous annoncer que votre profil a été vérifié et que votre demande est acceptée.",
            html: confirmationTemplate(email),
        },
        (err, info) => {
            if (err) console.log(err);
            else {
                console.log("Email sent successfully");
                console.log("Message ID : ", info.messageId);
            }
        }
    );
};

const sendRefuseByMail = async (email) => {
    transporter.sendMail(
        {
            from: process.env.SMTP_USER,
            to: email,
            subject: `Refus de votre demande`,
            text: `Nous avons malheureusement une mauvaise nouvelle à vous annoncer. Le profil concernant l'email ${email} a été vérifié et refusé par l'administration du site. Je vous invite à reprendre contact avec Babyplace rapidement, pour revoir avec nous votre dossier.`,
            html: refuseTemplate(email),
        },
        (err, info) => {
            if (err) console.log(err);
            else {
                console.log("Email sent successfully");
                console.log("Message ID : ", info.messageId);
            }
        }
    );
};

module.exports = {
    sendResponseByMail,
    sendConfirmationByMail,
    sendRefuseByMail
};

require("dotenv").config();

const adminTemplate = require("./mail_templates/admin.template.services");
const confirmationTemplate = require("./mail_templates/confirmation.template.services");
const refuseTemplate = require("./mail_templates/refuse.template.services");
const supprimerTemplate = require("./mail_templates/supprimer.template.services");
const reapprouverTemplate = require("./mail_templates/reapprouver.template.services");

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
const sendApprouvementByMail = async (email) => {
    transporter.sendMail(
        {
            from: process.env.SMTP_USER,
            to: email,
            subject: `Votre profil n'est plus signaler`,
            text: "Nous sommes ravis de vous annoncer que le profil concernant l'email ${email} a été vérifié et n'est plus considéré comme signalé.",
            html: reapprouverTemplate(email),
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
const sendSuppressionByMail = async (email) => {
    transporter.sendMail(
        {
            from: process.env.SMTP_USER,
            to: email,
            subject: `Suppression de votre profil`,
            text: `Nous avons le regret de vous annoncer, que le profil concernant l'email ${email}, faisant l'objet d'un signalement, a été vérifié et supprimer par l'administration du site. Je vous invite à reprendre contact avec Babyplace rapidement, pour revoir avec nous votre dossier.`,
            html: supprimerTemplate(email),
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
    sendRefuseByMail,
    sendApprouvementByMail,
    sendSuppressionByMail
};

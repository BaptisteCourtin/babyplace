const express = require("express");
const router = express.Router();
const sha256 = require("js-sha256");
const datasource = require("../database");
const multer = require("multer");
const uploadDoc = require("./helpers/helper");
const bcrypt = require("bcrypt");

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // => 5Mo
  },
});

// --- les controllers ---
const structure = require("./controllers/structure.controllers");
const horaires = require("./controllers/horaires.controllers");
const calendrier = require("./controllers/calendrier.controllers");
const dashboard = require("./controllers/dashboard.controllers");
const reservation = require("./controllers/reservation.controller");
const assMat = require("./controllers/assMat.controllers");
const creche = require("./controllers/creche.controllers");
const famille = require("./controllers/famille.controllers");
const parent = require("./controllers/parent.controllers");
const enfant = require("./controllers/enfant.controllers");
const messagerie = require("./controllers/messagerie.controllers");
const notification = require("./controllers/notification.controllers");
const messageAdmin = require("./controllers/messageAdmin.controllers");
const inscStructure = require("./controllers/inscStructure.controllers");
const inscCreche = require("./controllers/inscCreche.controllers");
const inscAssmat = require("./controllers/inscAssmat.controllers");
const mailer = require("./services/nodemailer/mailer.response.services");

// --- APP ---
// form inscription au début de l'app
router.post("/inscriptionAppFamille", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, `${process.env.SALT}`);
  datasource
    .query("INSERT INTO famille(email, password) VALUES (?, ?)", [
      email,
      hashedPassword,
    ])
    .then(([thisFamille]) => {
      if (thisFamille.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        datasource
          .query("SELECT familleId from famille where email=?", [email])
          .then(([[id]]) => {
            datasource
              .query(
                "INSERT INTO parent (familleId) VALUES(?) ; INSERT INTO parent (familleId) VALUES(?) ; INSERT INTO enfant (familleId) VALUES(?)",
                [id.familleId, id.familleId, id.familleId]
              )
              .then(() => {
                const start = Date.now();
                const token = sha256(email + start);
                datasource
                  .query(
                    "UPDATE famille SET token = ?, tokenStart = ? WHERE email = ?",
                    [token, start, email]
                  )
                  .then(() => {
                    res.status(200).send({
                      familleId: id.familleId,
                      token: token,
                      tokenStart: start,
                    });
                  })
                  .catch((err) => {
                    console.error(err);
                    res.status(500).send("Création de compte impossible");
                  });
              })
              .catch((err) => {
                console.error(err);
                res.status(500).send("insert parent impossible");
              });
          });
      }
    })
    .catch((err) => {
      console.error(err.errno);
      if (err.errno === 1062) {
        res.status(400).send(err);
      } else {
        res.status(500).send("Création de compte impossible");
      }
    });
});

// authentification de la famille
router.post("/authFamille", (req, res) => {
  datasource
    .query("SELECT familleId, password FROM famille WHERE email = ?", [
      req.body.email,
    ])
    .then(([[user]]) => {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
          const start = Date.now();
          const token = sha256(req.body.email + start);
          datasource
            .query(
              "UPDATE famille SET token = ?, tokenStart = ? WHERE email = ?",
              [token, start, user.email]
            )
            .then(() => {
              res.status(200).send({
                familleId: user.familleId,
                token: token,
                tokenStart: start,
              });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send("Erreur de connexion");
            });
        } else {
          res.status(401).send("Email ou mot de passe incorrect");
        }
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de connexion");
    });
});

router.get("/structure/allapp", structure.getAllStructures); // toutes les structures
router.get("/structure/notes/:id", structure.getStructureById); // les notes
router.get("/horaires/:id", horaires.getHorairesById); // les jours pour savoir si de base travaillé ou non
router.get("/calendrier/whereMoins/:id", calendrier.getCalendrierMoins); // calendrier par id where nbPlaces = -1
router.get("/famille/conf/:id", famille.getPersoConfiance); // perso confiance
router.get("/famille/info/:id", famille.getFamilleInfo); // info famille (noms + photo)
router.get("/famille/formInscription/:id", famille.getDonneesFormInscription); //donnees du formulaire inscription
router.get("/famille/pourcent/:id", famille.getPourcent); // pourcent des formulaire
router.get("/famille/likes/:id", famille.getLikes); // likes suivant la familleId
router.get("/famille/likesAndStructure/:id", famille.getLikesAndStructure); // get info structure si like
router.get("/famille/formParent/:id", parent.getDonneesFormParent); // donnees du formulaire parent
router.get("/famille/formEnfant/:id", enfant.getDonneesFormEnfant); // donnees du formulaire enfant
router.get("/famille/nomsEnfants/:id", enfant.getNomsEtIdEnfants); // noms et id des enfants
router.get("/famille/nomsEnfants100/:id", enfant.getNomsEtIdEnfants100); // noms et id des enfants à 100 %
router.get("/reservationAR/:id", reservation.getReservationAR); // prend les résa pour la page notif
router.get("/getReservationPayed/:id", reservation.getReservationPayed); // prend les résa pour la page menu (payed)
router.get("/contact/message/all", messageAdmin.getAllMessageToAdmin); // recupérer tous les message pour le dashboard admin
router.get("/messages/recup/:room", messagerie.getAllMessageFromDb); // recupération des message pour le chat

router.put("/structure/notes/:id", structure.updateNotes); // change les notes
router.put("/structure/signal/:id", structure.updateSignal); // signal la structure
router.put("/pourcentFormInscr/:id", famille.updatePourcentFormInscr); // pourcent formulaire inscription
router.put("/famille/nullOneDocForm/:id", famille.nullOneDocFormCommun); // delete un doc du form inscription (commun)
router.put("/formParent/:id", parent.updateFormParent); // update formulaire parent
router.put("/parent/nullOneDocForm/:id", parent.nullOneDocFormParent); // delete un doc du form inscription (parent)
router.put("/formEnfant/:id", enfant.updateFormEnfant); // formulaire enfant
router.put("/resaToNote/:id", reservation.updateResaToNote); // passe le status à toNote (se fait tout seul)
router.put("/famille/deconnexion/:id", famille.deco); // deconnexion famille

router.post("/reservation", reservation.postReservation); // reservation
router.post("/famille/newEnfant", enfant.postNewEnfant); // nouveau enfant
router.post("/famille/oneMoreLike", famille.postNewLike); // nouveau like
router.post("/contact/message", messageAdmin.postMessageToAdmin); // nouveau message pour l'admin
router.post("/messages/sauvegarde", messagerie.saveMessageInDb); // sauvegarde des messages du chat dans la db
router.post("/famille/newConfiance", famille.postNewConfiance); // nouveau perso confiance

router.delete("/famille/deleteConfiance/:id", famille.deleteConfiance); // delete perso confiance
router.delete("/famille/deleteEnfant/:id", enfant.deleteEnfant); // delete enfant
router.delete("/reservation/deleteResa/:id", reservation.deleteResa); // delete resa
router.delete("/deleteAncienResa/:id", reservation.deleteResaByDate); // delete resa by date (se fait tout seul)
router.delete("/famille/deleteLike", famille.deleteLike); // delete like

// FORM INSCRIPTION CHAQUE PARENT (juste le where qui change)
// mettre dans uploads et change nom
router.post(
  "/formInscription/docParent",
  multerMid.single("file"),
  async (req, res, next) => {
    try {
      const file = req.file;
      const result = await uploadDoc(file);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

// mise dans bdd
router.put("/formInscription/docParentChangeName/:id/:nomDoc", (req, res) => {
  const { httpDoc } = req.body;
  datasource
    .query(`UPDATE parent SET ${req.params.nomDoc}=? WHERE parentId=?`, [
      httpDoc,
      req.params.id,
    ])
    .then(([parent]) => {
      if (parent.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
});

// FORM INSCRIPTION FAMILLE
// mettre dans uploads et change nom
router.post(
  "/formInscription/docFamille",
  multerMid.single("file"),
  async (req, res, next) => {
    try {
      const file = req.file;
      const result = await uploadDoc(file);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

// mise dans bdd
router.put("/formInscription/docFamilleChangeName/:id/:nomDoc", (req, res) => {
  const { httpDoc } = req.body;
  datasource
    .query(`UPDATE famille SET ${req.params.nomDoc}=? WHERE familleId=?`, [
      httpDoc,
      req.params.id,
    ])
    .then(([parent]) => {
      if (parent.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
});

// PHOTO DE PROFIL FAMILLE
// mettre dans uploads et change nom
router.post(
  "/famille/photoProfil",
  multerMid.single("file"),
  async (req, res, next) => {
    try {
      const file = req.file;
      const result = await uploadDoc(file);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

// mise dans bdd
router.put("/famille/photoProfil/:id", (req, res) => {
  const { photoFamille } = req.body;
  datasource
    .query("UPDATE famille SET photoProfilFamille=? WHERE familleId=?", [
      photoFamille,
      req.params.id,
    ])
    .then(([famille]) => {
      if (famille.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
});

// --- AUTHENTIFICATION STRUCTURE (dashboard + admin + formulaire) ---
router.post("/auth", async (req, res) => {
  await datasource
    .query("SELECT * FROM structure WHERE email = ?", [req.body.email])
    .then(([[user]]) => {
      bcrypt.compare(req.body.password, user.password, function (err, result) {
        if (result) {
          const start = Date.now();
          const token = sha256(req.body.email + start);
          datasource
            .query(
              "UPDATE structure SET token = ?, tokenStart = ? WHERE email = ?",
              [token, start, user.email]
            )
            .then(() => {
              res.status(200).send({
                email: user.email,
                token: token,
                tokenStart: start,
                isVerify: user.isVerify,
              });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send("Erreur de connexion");
            });
        } else {
          res.sendStatus(404);
        }
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de connexion");
    });
});

// --- DASHBOARD ---
router.get("/structure", structure.getStructure); // tous sur la structure
router.get("/structureId", structure.getStructureId); // prend l'id de la structure
router.get("/structure/type/:id", structure.getStructureType);
router.get("/structure/details", structure.getStructureDetails);
router.get("/reservation/:id", reservation.getReser);
router.get("/reservation/approved/:id", reservation.getApprovedReser);
router.get("/favorites/:id", structure.getFavorites);
router.get("/horaires/:id", horaires.getHorairesById);
router.get("/calendrier/:id", calendrier.getCalendrier);
router.get("/notifications/:id", notification.getNotifications);

router.put("/reservation/status", reservation.updateStatus);
router.put("/reservation/dates", reservation.updateDates);
router.put("/horaires/day/:id", horaires.updateDay);
router.put("/horaires/open/:id", horaires.updateOpen);
router.put("/horaires/close/:id", horaires.updateClose);
router.put("/dashboard/hours/:id", dashboard.updateHours);
router.put("/dashboard/indemn/:id", dashboard.updateIndemn);
router.put("/dashboard/tarif/:id", dashboard.updateTarif);
router.put("/dashboard/options/:id", dashboard.updateOptions);
router.put("/dashboard/docs", structure.updateImages);
router.put("/structure/infos/:id", structure.updateInfos);
router.put("/structure/password/:id", structure.updatePwd);
router.put("/calendrier/places/:id", calendrier.updatePlaces);
router.put("/calendrier/places/close/:id", calendrier.updateStatusClose);
router.put("/calendrier/places/open/:id", calendrier.updateStatusOpen);
router.put("/logout/:id", structure.logout);

router.post("/calendrier/add", calendrier.postDate); // met une date dans la table calendrier
router.post("/dashboard/docs", structure.uploadProfil);
router.post("/uploads", multerMid.single("file"), async (req, res, next) => {
  try {
    const file = req.file;
    const result = await uploadDoc(file);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

router.delete("/calendrier", calendrier.deleteDates); // delete les dates avant aujourd'hui (automatique)
router.delete("/calendrier/:id", calendrier.deleteFullDate); // delete une date du calendrier
router.delete("/notifications/:id", notification.deleteNotification); // delete la notif

// --- MESSAGERIE ---
router.get("/structure/all", structure.getStructureDataMess);
router.get("/famille/all", famille.getFamilleDataMess);

router.post("/contact/messages/repondre", mailer.emailSender); // envoyer des réponses par mail pour l'admin
router.post("/contact/messages/accept", mailer.acceptEmailSender); // envoyer acceptation des crêches par mail
router.post("/contact/messages/reaccept", mailer.reAcceptEmailSender); // envoyer refus des crêches par mail
router.post("/contact/messages/supprimer", mailer.suppressionEmailSender); // envoyer refus des crêches par mail

// --- ADMIN ---
router.get("/admin", structure.getNotVerified); // get not verify OU signalé
router.get("/admin/assmat", assMat.getAssMat); // id de l'assMat
router.get("/admin/creche", creche.getCreche); // id de la creche
router.get("/admin/famille", famille.getFamille); // id de la famille

router.put("/admin/unsignaled/:id", structure.updateSignaled); // désignaler la structure
router.put("/admin/verified/:id", structure.updateVerified); // verifié et non signalé

router.delete("/contact/message/all/:id", messageAdmin.deleteMessagebyId); // delete message from admin dashboard
router.delete("/admin/refused/:id", structure.deleteRefused); // delete la structure

// --- FORMULAIRE ---
// inscription
router.post("/inscription", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, `${process.env.SALT}`);
  datasource
    .query("INSERT INTO structure(email, password) VALUES (?, ?)", [
      email,
      hashedPassword,
    ])
    .then(([user]) => {
      const start = Date.now();
      const token = sha256(email + start);
      datasource
        .query(
          "UPDATE structure SET token = ?, tokenStart = ? WHERE email = ?",
          [token, start, email]
        )
        .then(() => {
          res.status(200).send({
            email: user.email,
            token: token,
            tokenStart: start,
          });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("Création de compte impossible");
        });
    })
    .catch((err) => {
      console.error(err.errno);
      if (err.errno === 1062) {
        res.status(400).send(err);
      } else {
        res.status(500).send("Création de compte impossible");
      }
    });
});

router.get("/isCreche", inscStructure.getIsCreche); // creche ou assmat ?
router.get("/getStructureId", inscStructure.getStructureId); // get id structure with email

router.get("/crecheExist", inscCreche.crecheExist); // creche existe?
router.get("/getCrecheInfo", inscCreche.getCrecheInfo); // get infos creche
router.put("/inscriptionCreche1", inscCreche.inscriptionCreche1); // modif infos adimin creche
router.post("/inscriptionCreche1", inscCreche.updateCreche1); // création creche

router.get("/assmatExist", inscAssmat.assmatExist); // assmat existe ?
router.get("/getAssmatInfo", inscAssmat.getAssmatInfo); // get infos assmat
router.put("/inscriptionAssmat1", inscAssmat.inscriptionAssmat1); // modif info admin assmat
router.post("/inscriptionAssmat1", inscAssmat.updateAssmat1); // création assmat

router.put("/description", inscStructure.updateDescription); //modif description

router.get("/horairesExist", inscStructure.horairesExist); // get horaires si existent
router.put("/horaires", inscStructure.updateHoraires); // modif horaires
router.post("/horaires", inscStructure.createHoraires); // création horaires

router.get("/calendrierExist", inscStructure.calendrierExist); // get dates calendrier si existe
router.delete("/calendrierIndispo", inscStructure.deleteDate); // supprime une date donnée du calendrier

router.put("/optionsAccueilCreche", inscCreche.optionsAccueilCreche); // modif options accueil crèche (bool)
router.put("/optionsAccueilAssmat", inscAssmat.optionsAccueilAssmat); // modif options accueil assmat

router.put("/resaInst", inscStructure.resaInst); // modif resa instantanée (bool)

router.put("/dureeAccueil", inscStructure.dureeAccueil); // modif durée accueil

router.put("/agrementsCreche", inscCreche.agrementsCreche); // modif agréments crèche
router.put("/agrementsAssmat", inscAssmat.agrementsAssmat); // modif agréments assmat

router.put("/tarifsCreche", inscCreche.tarifsCreche); // modif tarifs crèche
router.put("/tarifsAssmat", inscAssmat.tarifsAssmat); // modif tarifs assmat

router.get("/photoProfil", inscStructure.getPhotoProfil); // get profile picture structure
router.put("/photoProfil", inscStructure.updatePhotoProfil); // update profile picture structure

// put profile picture in cloud
router.post(
  "/photoProfil",
  multerMid.single("file"),
  async (req, res, next) => {
    try {
      const file = req.file;
      const result = await uploadDoc(file);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/photosStructure", inscStructure.getPhotosStructure); // get structure pictures
router.put("/photosStructure", inscStructure.updatePhotosStructure); // update structure pictures + doc Pmi
router.get("/docPmi", inscStructure.getDocPmi); // get doc Pmi from structure
router.get("/justificatifs", inscAssmat.getJustificatifs); // get docs from assmat
router.put("/justificatifs", inscAssmat.justificatifsAssmat); // update assmat doc

router.put("/verifsAssmat", inscAssmat.verifsAssmat); // update assmat verifications
router.put("/verifsCreche", inscCreche.verifsCreche); // update creche verifications

// put structure picture in cloud
router.post(
  "/photosStructure",
  multerMid.single("file"),
  async (req, res, next) => {
    try {
      const file = req.file;
      const result = await uploadDoc(file);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

// put assmat doc in cloud
router.post(
  "/justificatifs",
  multerMid.single("file"),
  async (req, res, next) => {
    try {
      const file = req.file;
      const result = await uploadDoc(file);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

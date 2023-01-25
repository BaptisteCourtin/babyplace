const express = require("express");
const router = express.Router();
const sha256 = require("js-sha256");
const datasource = require("../database");
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "public/uploads/" });
const { v4: uuidv4 } = require("uuid");
const uploadDoc = require("./helpers/helper");

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

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
// const inscStructure = require("./controllers/inscStructure.controllers");

// --- pour app ---

// form inscription au début de l'app
router.post("/inscriptionAppFamille", (req, res) => {
  const { email, password } = req.body;
  datasource
    .query("INSERT INTO famille(email, password) VALUES (?, ?)", [
      email,
      password,
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
      console.error(err);
      res.status(500).send("Création de compte impossible");
    });
});

// authentification de la famille
router.post("/authFamille", (req, res) => {
  datasource
    .query("SELECT familleId, password FROM famille WHERE email = ?", [
      req.body.email,
    ])
    .then(([[user]]) => {
      if (user && req.body.password === user.password) {
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
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de connexion");
    });
});

router.get("/structure/allapp", structure.getAllStructures); //search
router.get("/structure/notes/:id", structure.getStructureById); //notes
router.get("/horaires/:id", horaires.getHorairesById); //search
router.get("/calendrier/whereMoins/:id", calendrier.getCalendrierMoins); // calendrier par id where nbPlaces = -1
router.get("/famille/conf/:id", famille.getPersoConfiance); //perso confiance
router.get("/famille/info/:id", famille.getFamilleInfo); // info famille (noms + photo)
router.get("/famille/formInscription/:id", famille.getDonneesFormInscription); //donnees du formulaire inscription
router.get("/famille/pourcent/:id", famille.getPourcent); // pourcent des formulaire
router.get("/famille/likes/:id", famille.getLikes); // get likes
router.get("/famille/formParent/:id", parent.getDonneesFormParent); //donnees du formulaire parent
router.get("/famille/formEnfant/:id", enfant.getDonneesFormEnfant); //donnees du formulaire enfant
router.get("/famille/nomsEnfants/:id", enfant.getNomsEtIdEnfants); // noms et id des enfants
router.get("/famille/nomsEnfants100/:id", enfant.getNomsEtIdEnfants100); // noms et id des enfants à 100 %
router.get("/reservationAR/:id", reservation.getReservationAR); // prend les résa pour la page notif
router.get("/getReservationPayed/:id", reservation.getReservationPayed); // prend les résa pour la page menu (payed)
router.get("/contact/message/all", messageAdmin.getAllMessageToAdmin); // recupérer tous les message pour le dashboard admin
router.get("/messages/recup/:room", messagerie.getAllMessageFromDb); // recupération des message pour le chat

router.put("/structure/notes/:id", structure.updateNotes); //notes
router.put("/structure/signal/:id", structure.updateSignal); // signalement
router.put("/pourcentFormInscr/:id", famille.updatePourcentFormInscr); // pourcent formulaire inscr
router.put("/famille/nullOneDocForm/:id", famille.nullOneDocFormCommun); // delete un doc du form inscription (commun)
router.put("/formParent/:id", parent.updateFormParent); // formulaire parent
router.put("/parent/nullOneDocForm/:id", parent.nullOneDocFormParent); // delete un doc du form inscription (parent)
router.put("/formEnfant/:id", enfant.updateFormEnfant); // formulaire enfant
router.put("/resaToNote/:id", reservation.updateResaToNote); // passe le status à toNote

router.post("/reservation", reservation.postReservation); // reservation
router.post("/famille/newEnfant", enfant.postNewEnfant); // nouveau enfant
router.post("/famille/oneMoreLike", famille.postNewLike); // nouveau like
router.post("/contact/message", messageAdmin.postMessageToAdmin); // nouveau message pour l'admin
router.post("/messages/sauvegarde", messagerie.saveMessageInDb); // sauvegarde des messages du chat dans la db
router.post("/famille/newConfiance", famille.postNewConfiance); // nouveau perso confiance

router.delete("/famille/deleteConfiance/:id", famille.deleteConfiance); // delete perso confiance
router.delete("/famille/deleteEnfant/:id", enfant.deleteEnfant); // delete enfant
router.delete("/reservation/deleteResa/:id", reservation.deleteResa); // delete resa
router.delete("/deleteAncienResa/:id", reservation.deleteResaByDate); // delete resa by date
router.delete("/famille/deleteLike", famille.deleteLike); // delete like
router.delete("/contact/message/all/:id", messageAdmin.deleteMessagebyId); // delete message from admin dashboard

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

// --- pour messagerie ---

router.get("/structure/all", structure.getStructureDataMess);
router.get("/famille/all", famille.getFamilleDataMess);

//Routes for dashboard + admin page start
router.get("/structure", structure.getStructure);
router.get("/structures", structure.getStructures);
router.get("/structure/type/:id", structure.getStructureType);
router.get("/structure/details", structure.getStructureDetails);
router.get("/reservation/:id", reservation.getReser);
router.get("/admin", structure.getNotVerified);
router.get("/horaires/:id", horaires.getHorairesById);
router.get("/calendrier/:id", calendrier.getCalendrier);
router.get("/notifications/:id", notification.getNotifications);
router.get("/admin/assmat", assMat.getAssMat);
router.get("/admin/creche", creche.getCreche);
router.get("/admin/famille", famille.getFamille);

router.put("/admin/verified/:id", structure.updateVerified);
router.put("/reservation/status", reservation.updateStatus); // change status resa
router.put("/horaires/day/:id", horaires.updateDay);
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

router.post("/calendrier/add", calendrier.postDate);
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

router.delete("/calendrier", calendrier.deleteDates);
router.delete("/calendrier/:id", calendrier.fullDate);
router.delete("/admin/refused/:id", structure.deleteRefused);
router.delete("/notifications/:id", notification.deleteNotification);
//Routes for dashboard + admin page end

router.post("/inscription", (req, res) => {
  const { email, password } = req.body;
  datasource
    .query("INSERT INTO structure(email, password) VALUES (?, ?)", [
      email,
      password,
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
      console.error(err);
      res.status(500).send("Création de compte impossible");
    });
});

router.get("/getCrecheInfo", (req, res) => {
  datasource
    .query(
      "SELECT * FROM structure INNER JOIN creche ON creche.structureId=structure.structureId WHERE email = ?",
      [req.query.email]
    )
    .then(([[result]]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
});

router.get("/getAssmatInfo", (req, res) => {
  datasource
    .query(
      "SELECT * FROM structure INNER JOIN assMat ON assMat.structureId=structure.structureId WHERE email = ?",
      [req.query.email]
    )
    .then(([[result]]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
});

router.get("/crecheExist", (req, res) => {
  datasource
    .query(
      "SELECT creche.structureId FROM structure INNER JOIN creche ON creche.structureId=structure.structureId WHERE email = ?",
      [req.query.email]
    )
    .then(([[result]]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
});

router.put("/inscriptionCreche1", (req, res) => {
  const {
    isCreche,
    typeCreche,
    nomStructure,
    adresseStructure,
    telephone,
    email,
  } = req.body;
  datasource
    .query(
      "UPDATE structure SET isCreche = ?, adresse = ?, telephone= ? WHERE email= ?",
      [isCreche, adresseStructure, telephone, email]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        datasource
          .query("SELECT structureId from structure where email=?", [email])
          .then(([[id]]) => {
            const structureId = id.structureId;
            datasource
              .query(
                "INSERT INTO creche(type, nom, structureId) VALUES(?,?,?)",
                [typeCreche, nomStructure, structureId]
              )
              .then(() => {
                res.sendStatus(204);
              })
              .catch((err) => {
                console.error(err);
                res.status(500).send("Modification impossible");
              });
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
});
router.post("/inscriptionCreche1", (req, res) => {
  const {
    isCreche,
    typeCreche,
    nomStructure,
    adresseStructure,
    telephone,
    email,
  } = req.body;
  datasource
    .query(
      "UPDATE structure INNER JOIN creche ON creche.structureId=structure.structureId SET isCreche = ?, adresse = ?, telephone= ?, type=?, nom=? WHERE email= ?",
      [isCreche, adresseStructure, telephone, typeCreche, nomStructure, email]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.get("/assmatExist", (req, res) => {
  datasource
    .query(
      "SELECT assMat.structureId FROM structure INNER JOIN assMat ON assMat.structureId=structure.structureId WHERE email = ?",
      [req.query.email]
    )
    .then(([[result]]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
});

router.put("/inscriptionAssmat1", (req, res) => {
  const {
    isCreche,
    nomNaissance,
    nomUsage,
    prenom,
    adresseStructure,
    telephone,
    email,
  } = req.body;
  datasource
    .query(
      "UPDATE structure SET isCreche = ?, adresse = ?, telephone= ? WHERE email= ?",
      [isCreche, adresseStructure, telephone, email]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        datasource
          .query("SELECT structureId from structure where email=?", [email])
          .then(([[id]]) => {
            const structureId = id.structureId;
            datasource
              .query(
                "INSERT INTO assMat(nomNaissance, nomUsage, prenom, structureId) VALUES(?,?,?,?)",
                [nomNaissance, nomUsage, prenom, structureId]
              )
              .then(() => {
                res.sendStatus(204);
              })
              .catch((err) => {
                console.error(err);
                res.status(500).send("Modification impossible");
              });
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
});

router.post("/inscriptionAssmat1", (req, res) => {
  const {
    isCreche,
    nomNaissance,
    nomUsage,
    prenom,
    adresseStructure,
    telephone,
    email,
  } = req.body;
  datasource
    .query(
      "UPDATE structure INNER JOIN assMat ON assMat.structureId=structure.structureId SET isCreche = ?, adresse = ?, telephone= ?, nomNaissance=?, nomUsage=?, prenom=? WHERE email= ?",
      [
        isCreche,
        adresseStructure,
        telephone,
        nomNaissance,
        nomUsage,
        prenom,
        email,
      ]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.get("/calendrierExist", (req, res) => {
  datasource
    .query(
      "SELECT calendrier.date FROM calendrier WHERE structureId= ? AND nbPlaces=-1",
      [req.query.id]
    )
    .then(([result]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
});
router.get("/horairesExist", (req, res) => {
  datasource
    .query("SELECT * FROM horaires WHERE structureId= ?", [req.query.id])
    .then(([result]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
});

const storageAvatar = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/avatar");
  },
  filename: (req, file, cb) => {
    const date = new Date();
    cb(
      null,
      "avatar" + date.getMinutes() + Math.round(Math.random() * 1000) + ".jpeg"
    );
  },
});

const uploadAvatar = multer({ storage: storageAvatar });

router.post("/photoProfil", uploadAvatar.single("avatar"), (req, res) => {
  res.send(req.file);
});

router.get("/photoProfil", (req, res) => {
  datasource
    .query("SELECT photoProfil FROM structure WHERE structureId= ?", [
      req.query.id,
    ])
    .then(([result]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
});

router.put("/photoProfil", (req, res) => {
  const { photoProfil, email } = req.body;
  datasource
    .query("UPDATE structure SET photoProfil= ? WHERE email= ?", [
      photoProfil,
      email,
    ])
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

const storagePhotos = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/photosStructure");
  },
  filename: (req, file, cb) => {
    const date = new Date();
    cb(
      null,
      "photo" + date.getMinutes() + Math.round(Math.random() * 1000) + ".jpeg"
    );
  },
});

const uploadPhotos = multer({ storage: storagePhotos });

router.post(
  "/photosStructure",
  uploadPhotos.fields([
    { name: "photo1", maxCount: 1 },
    { name: "photo2", maxCount: 1 },
    { name: "photo3", maxCount: 1 },
  ]),
  (req, res) => {
    res.send(req.files);
  }
);

router.get("/photosStructure", (req, res) => {
  datasource
    .query(
      "SELECT photoStructure1, photoStructure2, photoStructure3 FROM structure WHERE structureId= ?",
      [req.query.id]
    )
    .then(([result]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
});

router.put("/photosStructure", (req, res) => {
  const { photoStructure1, photoStructure2, photoStructure3, email } = req.body;
  datasource
    .query(
      "UPDATE structure SET photoStructure1= ?, photoStructure2= ?, photoStructure3= ? WHERE email= ?",
      [photoStructure1, photoStructure2, photoStructure3, email]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.put("/description", (req, res) => {
  const { description, email } = req.body;
  datasource
    .query("UPDATE structure SET description = ? WHERE email= ?", [
      description,
      email,
    ])
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.put("/optionsAccueilCreche", (req, res) => {
  const {
    PCSC1,
    nesting,
    montessori,
    handi,
    jardin,
    sorties,
    promenades,
    eveil,
    musique,
    art,
    bilingue,
    bibli,
    transport,
    albumPhoto,
    photoConnecte,
    email,
  } = req.body;
  datasource
    .query(
      "UPDATE structure INNER JOIN creche ON creche.structureId = structure.structureId SET PCSC1=?, nesting=?, montessori=?, handi=?, jardin=?, sorties=?, promenades=?, eveil=?, musique=?, art=?, bilingue=?, bibli=?, transport=?, albumPhoto=?, photoConnecte=? WHERE email= ?",
      [
        PCSC1,
        nesting,
        montessori,
        handi,
        jardin,
        sorties,
        promenades,
        eveil,
        musique,
        art,
        bilingue,
        bibli,
        transport,
        albumPhoto,
        photoConnecte,
        email,
      ]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.put("/optionsAccueilAssmat", (req, res) => {
  const {
    PCSC1,
    nesting,
    montessori,
    handi,
    jardin,
    sorties,
    promenades,
    eveil,
    musique,
    art,
    bilingue,
    bibli,
    transport,
    enfants,
    experience,
    animaux,
    nonFumeur,
    zeroPollution,
    repas,
    hygiene,
    albumPhoto,
    photoConnecte,
    email,
  } = req.body;
  datasource
    .query(
      "UPDATE structure INNER JOIN assMat ON assMat.structureId = structure.structureId SET PCSC1=?, nesting=?, montessori=?, handi=?, jardin=?, sorties=?, promenades=?, eveil=?, musique=?, art=?, bilingue=?, bibli=?, transport=?, enfants=?, experience=?, animaux=?, nonFumeur=?, zeroPollution=?, repas=?, hygiene=?, albumPhoto=?, photoConnecte=? WHERE email= ?",
      [
        PCSC1,
        nesting,
        montessori,
        handi,
        jardin,
        sorties,
        promenades,
        eveil,
        musique,
        art,
        bilingue,
        bibli,
        transport,
        enfants,
        experience,
        animaux,
        nonFumeur,
        zeroPollution,
        repas,
        hygiene,
        albumPhoto,
        photoConnecte,
        email,
      ]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.put("/resaInst", (req, res) => {
  const { resaInst, email } = req.body;
  datasource
    .query("UPDATE structure SET resaInst = ? WHERE email= ?", [
      resaInst,
      email,
    ])
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.post("/horaires", (req, res) => {
  const {
    lundiOuvert,
    mardiOuvert,
    mercrediOuvert,
    jeudiOuvert,
    vendrediOuvert,
    samediOuvert,
    dimancheOuvert,
    lundiMin,
    lundiMax,
    mardiMin,
    mardiMax,
    mercrediMin,
    mercrediMax,
    jeudiMin,
    jeudiMax,
    vendrediMin,
    vendrediMax,
    samediMin,
    samediMax,
    dimancheMin,
    dimancheMax,
    email,
  } = req.body;
  datasource
    .query("SELECT structureId from structure where email=?", [email])
    .then(([[id]]) => {
      const structureId = id.structureId;
      datasource.query(
        "INSERT INTO horaires(jourSemaine, ouvert, heureMin, heureMax, jourId, structureId) VALUES('lundi', ?, ?, ?, 1, ?)",
        [lundiOuvert, lundiMin, lundiMax, structureId]
      );
      datasource.query(
        "INSERT INTO horaires(jourSemaine, ouvert, heureMin, heureMax, jourId, structureId) VALUES('mardi', ?, ?, ?, 2, ?)",
        [mardiOuvert, mardiMin, mardiMax, structureId]
      );
      datasource.query(
        "INSERT INTO horaires(jourSemaine, ouvert, heureMin, heureMax, jourId, structureId) VALUES('mercredi', ?, ?, ?, 3, ?)",
        [mercrediOuvert, mercrediMin, mercrediMax, structureId]
      );
      datasource.query(
        "INSERT INTO horaires(jourSemaine, ouvert, heureMin, heureMax, jourId, structureId) VALUES('jeudi', ?, ?, ?, 4, ?)",
        [jeudiOuvert, jeudiMin, jeudiMax, structureId]
      );
      datasource.query(
        "INSERT INTO horaires(jourSemaine, ouvert, heureMin, heureMax, jourId, structureId) VALUES('vendredi', ?, ?, ?, 5, ?)",
        [vendrediOuvert, vendrediMin, vendrediMax, structureId]
      );
      datasource.query(
        "INSERT INTO horaires(jourSemaine, ouvert, heureMin, heureMax, jourId, structureId) VALUES('samedi', ?, ?, ?, 6, ?)",
        [samediOuvert, samediMin, samediMax, structureId]
      );
      datasource.query(
        "INSERT INTO horaires(jourSemaine, ouvert, heureMin, heureMax, jourId, structureId) VALUES('dimanche', ?, ?, ?, 7, ?)",
        [dimancheOuvert, dimancheMin, dimancheMax, structureId]
      );
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
});

router.put("/horaires", async (req, res) => {
  const {
    lundiOuvert,
    mardiOuvert,
    mercrediOuvert,
    jeudiOuvert,
    vendrediOuvert,
    samediOuvert,
    dimancheOuvert,
    lundiMin,
    lundiMax,
    mardiMin,
    mardiMax,
    mercrediMin,
    mercrediMax,
    jeudiMin,
    jeudiMax,
    vendrediMin,
    vendrediMax,
    samediMin,
    samediMax,
    dimancheMin,
    dimancheMax,
    structureId,
  } = req.body;
  try {
    await datasource.query(
      "UPDATE horaires SET ouvert=?, heureMin=?, heureMax=? WHERE jourId=1 AND structureId=?",
      [lundiOuvert, lundiMin, lundiMax, structureId]
    );
    await datasource.query(
      "UPDATE horaires SET ouvert=?, heureMin=?, heureMax=? WHERE jourId=2 AND structureId=?",
      [mardiOuvert, mardiMin, mardiMax, structureId]
    );
    await datasource.query(
      "UPDATE horaires SET ouvert=?, heureMin=?, heureMax=? WHERE jourId=3 AND structureId=?",
      [mercrediOuvert, mercrediMin, mercrediMax, structureId]
    );
    await datasource.query(
      "UPDATE horaires SET ouvert=?, heureMin=?, heureMax=? WHERE jourId=4 AND structureId=?",
      [jeudiOuvert, jeudiMin, jeudiMax, structureId]
    );
    await datasource.query(
      "UPDATE horaires SET ouvert=?, heureMin=?, heureMax=? WHERE jourId=5 AND structureId=?",
      [vendrediOuvert, vendrediMin, vendrediMax, structureId]
    );
    await datasource.query(
      "UPDATE horaires SET ouvert=?, heureMin=?, heureMax=? WHERE jourId=6 AND structureId=?",
      [samediOuvert, samediMin, samediMax, structureId]
    );
    await datasource.query(
      "UPDATE horaires SET ouvert=?, heureMin=?, heureMax=? WHERE jourId=7 AND structureId=?",
      [dimancheOuvert, dimancheMin, dimancheMax, structureId]
    );
  } catch (err) {
    console.error(err);
  }
});

router.put("/dureeAccueil", (req, res) => {
  const { dureeMin, dureeMax, email } = req.body;
  datasource
    .query("UPDATE structure SET dureeMin = ?, dureeMax = ? WHERE email= ?", [
      dureeMin,
      dureeMax,
      email,
    ])
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.get("/getStructureId", (req, res) => {
  datasource
    .query("SELECT structureId FROM structure WHERE email = ?", [
      req.query.email,
    ])
    .then(([[result]]) => {
      res.send(result).status(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Accès impossible");
    });
});

router.delete("/calendrierIndispo", (req, res) => {
  const { structureId, date } = req.query;
  datasource
    .query("DELETE FROM calendrier WHERE structureId= ? AND date = ?", [
      structureId,
      date,
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Suppression impossible");
    });
});

router.put("/agrementsCreche", (req, res) => {
  const { nbEmployes, maxPlaces, maxHandi, max18Mois, maxNuit, email } =
    req.body;
  datasource
    .query(
      "UPDATE structure INNER JOIN creche ON creche.structureId=structure.structureId SET nbEmployes= ?, maxPlaces= ?, maxHandi= ?, max18Mois= ?, maxNuit= ? WHERE email= ?",
      [nbEmployes, maxPlaces, maxHandi, max18Mois, maxNuit, email]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.put("/agrementsAssmat", (req, res) => {
  const { maxPlaces, maxHandi, max18Mois, maxNuit, email } = req.body;
  datasource
    .query(
      "UPDATE structure INNER JOIN assMat ON assMat.structureId=structure.structureId SET maxPlaces= ?, maxHandi= ?, max18Mois= ?, maxNuit= ? WHERE email= ?",
      [maxPlaces, maxHandi, max18Mois, maxNuit, email]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.put("/tarifsCreche", (req, res) => {
  const {
    financementPaje,
    tarifHeure,
    tarifHoraireSpec,
    indemnRepas,
    tarifAtelier,
    email,
  } = req.body;
  datasource
    .query(
      "UPDATE structure INNER JOIN creche ON creche.structureId=structure.structureId SET financementPaje = ?, tarifHeure= ?, tarifHoraireSpec= ?, indemnRepas= ?, tarifAtelier= ?  WHERE email= ?",
      [
        financementPaje,
        tarifHeure,
        tarifHoraireSpec,
        indemnRepas,
        tarifAtelier,
        email,
      ]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.put("/tarifsAssmat", (req, res) => {
  const {
    tarifHeure,
    tarifHoraireSpec,
    indemnRepas,
    indemnKm,
    indemnEntretien,
    tarifHeureSup,
    email,
  } = req.body;
  datasource
    .query(
      "UPDATE structure INNER JOIN assMat ON assMat.structureId=structure.structureId SET tarifHeure= ?, tarifHoraireSpec= ?, indemnRepas= ?, indemnKm= ?, indemnEntretien= ?, tarifHeureSup= ? WHERE email= ?",
      [
        tarifHeure,
        tarifHoraireSpec,
        indemnRepas,
        indemnKm,
        indemnEntretien,
        tarifHeureSup,
        email,
      ]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

const storageJustif = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/justificatifs");
  },
  filename: (req, file, cb) => {
    const date = new Date();
    cb(
      null,
      date.getMinutes() + Math.round(Math.random() * 1000) + file.originalname
    );
  },
});
const uploadJustif = multer({ storage: storageJustif });

router.post(
  "/justificatifs",
  uploadJustif.fields([
    { name: "docpmi", maxCount: 1 },
    { name: "docIdentite", maxCount: 1 },
    { name: "docVitale", maxCount: 1 },
    { name: "docJustifDom", maxCount: 1 },
    { name: "docDiplome", maxCount: 1 },
    { name: "docRespCivile", maxCount: 1 },
    { name: "docAssAuto", maxCount: 1 },
  ]),
  (req, res) => {
    res.send(req.files);
  }
);

router.put("/verifsCreche", (req, res) => {
  const { numAgrement, dateAgrement, docPmiSrc, siret, email } = req.body;
  datasource
    .query(
      "UPDATE structure INNER JOIN creche ON creche.structureId=structure.structureId SET numAgrement= ?, dateAgrement= ?, docPmi= ?, siret= ?  WHERE email= ?",
      [numAgrement, dateAgrement, docPmiSrc, siret, email]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.put("/verifsAssmat", (req, res) => {
  const {
    numSecu,
    numAgrement,
    dateAgrement,
    docPmiSrc,
    assHabitNom,
    assHabitNumero,
    assHabitAdresse,
    assAutoNom,
    assAutoNumero,
    assAutoAdresse,
    docCniSrc,
    docCpamSrc,
    docDomSrc,
    docDiplomeSrc,
    docRespSrc,
    docAutoSrc,
    email,
  } = req.body;
  datasource
    .query(
      "UPDATE structure INNER JOIN assMat ON assMat.structureId=structure.structureId SET numSecu= ?, numAgrement= ?, dateAgrement= ?, docPmi= ?, assHabitNom= ?, assHabitNumero= ?, assHabitAdresse= ?, assAutoNom= ?, assAutoNumero= ?, assAutoAdresse= ?, docIdentite= ?, docVitale= ?, docJustifDom= ?, docDiplome= ?, docRespCivile= ?, docAssAuto= ? WHERE email= ?",
      [
        numSecu,
        numAgrement,
        dateAgrement,
        docPmiSrc,
        assHabitNom,
        assHabitNumero,
        assHabitAdresse,
        assAutoNom,
        assAutoNumero,
        assAutoAdresse,
        docCniSrc,
        docCpamSrc,
        docDomSrc,
        docDiplomeSrc,
        docRespSrc,
        docAutoSrc,
        email,
      ]
    )
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
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

router.put("/logout/:id", structure.logout);
router.post("/calendrier/add", calendrier.postDate);

router.delete("/calendrier", calendrier.deleteDates);
router.delete("/admin/refused/:id", structure.deleteRefused);
//Routes for dashboard + admin page end

router.post("/auth", async (req, res) => {
  await datasource
    .query("SELECT * FROM structure WHERE email = ? AND isVerify = 1", [
      req.body.email,
    ])
    .then(([[user]]) => {
      if (user && req.body.password === user.password) {
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
            });
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Erreur de connexion");
          });
      } else if (user && req.body.password !== user.password) {
        res.status(401).send("Email ou mot de passe incorrect");
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de connexion");
    });
});

module.exports = router;

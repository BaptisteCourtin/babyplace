const express = require("express");
const router = express.Router();
const sha256 = require("js-sha256");
const datasource = require("../database");
const fs = require("fs");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const structure = require("./controllers/structure.controllers");
const horaires = require("./controllers/horaires.controllers");
const calendrier = require("./controllers/calendrier.controllers");
const dashboard = require("./controllers/dashboard.controllers");
const messageAdmin = require("./controllers/messageAdmin.controllers");

const assMat = require("./controllers/assMat.controllers");
const creche = require("./controllers/creche.controllers");
const famille = require("./controllers/famille.controllers");

// --- pour app ---

router.get("/structure/allapp", structure.getAllStructures); //search
router.get("/horaires/:id", horaires.getHorairesById); //search
router.get("/structure/notes/:id", structure.getStructureById); //notes
router.get("/famille/conf/:id", famille.getPersoConfiance); //perso confiance
router.get("/famille/formParent/:id", famille.getDonneesFormParent); //donnees du formulaire parent
router.get("/famille/formEnfant/:id", famille.getDonneesFormEnfant); //donnees du formulaire enfant
router.get("/famille/nomsEnfants/:id", famille.getNomsEtIdEnfants); // noms et id des enfants
router.get("/famille/formInscription/:id", famille.getDonneesFormInscription); //donnees du formulaire inscription
router.get("/famille/pourcent/:id", famille.getPourcent); // pourcent des formulaire
router.get("/contact/message/all", messageAdmin.getAllMessageToAdmin); // recupérer tous les message pour le dashboard admin

router.put("/structure/notes/:id", structure.updateNotes); //notes
router.put("/structure/signal/:id", structure.updateSignal); // signalement
router.put("/formParent/:id", famille.updateFormParent); // formulaire parent
router.put("/formEnfant/:id", famille.updateFormEnfant); // formulaire enfant

router.post("/reservation", famille.postReservation); // reservation
router.post("/famille/newEnfant", famille.postNewEnfant); // nouveau enfant
router.post("/contact/message", messageAdmin.postMessageToAdmin); // nouveau message pour l'admin

router.delete("/famille/deleteEnfant/:id", famille.deleteEnfant); // delete enfant
router.delete("/contact/message/all/:id", messageAdmin.deleteMessagebyId); // delete message from admin dashboard

// FORM INSCRIPTION PARENT (juste le where qui change)
// mettre dans uploads et change nom
router.post(
  "/formInscription/docParent",
  multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "./public/uploads/formInscriptionParents");
      },
      filename: (req, file, cb) => {
        const date = new Date();
        cb(
          null,
          Math.round(Math.random() * 1000) +
          `${date.getMinutes()}${date.getSeconds()}` +
          Math.round(Math.random() * 1000) +
          "-qws-" +
          file.originalname
          // nom avec des chiffres + nom d'origine du fichier
        );
      },
    }),
  }).fields([
    // nom envoyer par formData
    { name: "docJustifRevenus", maxCount: 1 },
    { name: "docDeclaRevenus", maxCount: 1 },
    { name: "docSituationPro", maxCount: 1 },
    { name: "docJustifDom", maxCount: 1 },
    { name: "numCaf", maxCount: 1 },
    { name: "numSecu", maxCount: 1 },
  ]),
  (req, res) => {
    res.send(req.files);
  }
);

// mise dans bdd
router.put("/formInscription/docParentChangeName/:id", (req, res) => {
  const {
    docJustifRevenus,
    docDeclaRevenus,
    docSituationPro,
    docJustifDom,
    numCaf,
    numSecu,
  } = req.body;
  datasource
    .query(
      "UPDATE parent SET docJustifRevenus=?, docDeclaRevenus=?, docSituationPro=?, docJustifDom=?, numCaf=?, numSecu=? WHERE parentId=?",
      [
        docJustifRevenus,
        docDeclaRevenus,
        docSituationPro,
        docJustifDom,
        numCaf,
        numSecu,
        req.params.id,
      ]
    )
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
  multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "./public/uploads/formInscriptionFamille");
      },
      filename: (req, file, cb) => {
        const date = new Date();
        cb(
          null,
          Math.round(Math.random() * 1000) +
          `${date.getMinutes()}${date.getSeconds()}` +
          Math.round(Math.random() * 1000) +
          "-qws-" +
          file.originalname
          // nom avec des chiffres + nom d'origine du fichier
        );
      },
    }),
  }).fields([
    // nom envoyer par formData
    { name: "docAssurParent", maxCount: 1 },
    { name: "docRib", maxCount: 1 },
    { name: "docAutoImage", maxCount: 1 },
    { name: "docDivorce", maxCount: 1 },
  ]),
  (req, res) => {
    res.send(req.files);
  }
);

// mise dans bdd
router.put("/formInscription/docFamilleChangeName/:id", (req, res) => {
  const { docAssurParent, docRib, docAutoImage, docDivorce } = req.body;
  datasource
    .query(
      "UPDATE famille SET docAssurParent=?, docRib=?, docAutoImage=?, docDivorce=? WHERE familleId=?",
      [docAssurParent, docRib, docAutoImage, docDivorce, req.params.id]
    )
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

// --- pour messagerie ---

router.get("/structure/all", structure.getStructureDataMess);
router.get("/famille/all", famille.getFamilleDataMess);

//Routes for dashboard + admin page start
router.get("/structure", structure.getStructure);
router.get("/structures", structure.getStructures);
router.get("/structure/type/:id", structure.getStructureType);
router.get("/structure/details", structure.getStructureDetails);
router.get("/admin", structure.getNotVerified);
router.get("/horaires", horaires.getHoraires);
router.get("/horaires/:id", horaires.getHorairesById);
router.get("/calendrier/:id", calendrier.getCalendrier);
router.get("/admin/assmat", assMat.getAssMat);
router.get("/admin/creche", creche.getCreche);
router.get("/admin/famille", famille.getFamille);

router.put("/admin/verified/:id", structure.updateVerified);
router.put("/horaires/day/:id", horaires.updateDay);
router.put("/dashboard/hours/:id", dashboard.updateHours);
router.put("/dashboard/indemn/:id", dashboard.updateIndemn);
router.put("/dashboard/tarif/:id", dashboard.updateTarif);
router.put("/dashboard/options/:id", dashboard.updateOptions);
router.put("/calendrier/places/:id", calendrier.updatePlaces);
router.put("/calendrier/places/close/:id", calendrier.updateStatusClose);
router.put("/calendrier/places/open/:id", calendrier.updateStatusOpen);

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
  res.send(req.file.filename);
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

// router.put("/photosStructure2", (req, res) => {
//   const { photoStructure2, email } = req.body;
//   datasource
//     .query("UPDATE structure SET photoStructure2= ? WHERE email= ?",
//       [photoStructure2, email])
//     .then(([structure]) => {
//       if (structure.affectedRows === 0) {
//         res.status(404).send("Not Found");
//       } else {
//         res.sendStatus(204);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Modification impossible");
//     });
// });

// router.put("/photosStructure3", (req, res) => {
//   const { photoStructure3, email } = req.body;
//   datasource
//     .query("UPDATE structure SET photoStructure3= ? WHERE email= ?",
//       [photoStructure3, email])
//     .then(([structure]) => {
//       if (structure.affectedRows === 0) {
//         res.status(404).send("Not Found");
//       } else {
//         res.sendStatus(204);
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("Modification impossible");
//     });
// });

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
    .query("SELECT * FROM structure WHERE email = ?", [req.body.email])
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
      } else {
        res.status(401).send("Email ou mot de passe incorrect");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de connexion");
    });
});

router.post("/authFamille", (req, res) => {
  datasource
    .query(
      "SELECT * FROM famille AS f LEFT JOIN famille_structure AS fs ON f.familleId = fs.familleId LEFT JOIN parent AS p ON f.familleId = p.familleId WHERE f.email = ?",
      [req.body.email]
    )
    // prendre famille - parents - enfants - famille_structure
    // famille_structure => like
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
              email: user.email,
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

module.exports = router;

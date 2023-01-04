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
// --- pour app ---

router.get("/structure/allapp", structure.getAllStructures);
router.get("/horaires/:id", horaires.getHorairesById);

// --- --- ---

router.get("/structure/all", structure.getStructureDataMess);

// prend tout de structure where token
router.get("/structure", structure.getStructure);
router.get("/horaires", horaires.getHoraires);
router.get("/calendrier/:id", calendrier.getCalendrier);

router.put("/horaires/day/:id", horaires.updateDay);
router.put("/dashboard/hours/:id", dashboard.updateHours);
router.put("/dashboard/indemnRepas/:id", dashboard.updateIndemnRepas);
router.put("/calendrier/places/:id", calendrier.updatePlaces);
router.put("/calendrier/places/close/:id", calendrier.updateStatusClose);
router.put("/calendrier/places/open/:id", calendrier.updateStatusOpen);


router.post("/inscription", (req, res) => {
  const { email, password } = req.body;
  datasource
    .query("INSERT INTO structure(email, password) VALUES (?, ?)",
      [email, password])
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
  const { isCreche, typeCreche, nomStructure, adresseStructure, telephone, email } = req.body;
  datasource
    .query("UPDATE structure SET isCreche = ?, adresse = ?, telephone= ? WHERE email= ?",
      [isCreche, adresseStructure, telephone, email])
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        datasource.query("SELECT structureId from structure where email=?", [email])
          .then(([[id]]) => {
            const structureId = id.structureId;
            datasource
              .query("INSERT INTO creche(type, nom, structureId) VALUES(?,?,?)",
                [typeCreche, nomStructure, structureId])
              .then(() => {
                res.sendStatus(204);
              })
              .catch((err) => {
                console.error(err);
                res.status(500).send("Modification impossible");
              });
          })
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
});

router.put("/inscriptionAssmat1", (req, res) => {
  const { isCreche, nomNaissance, nomUsage, prenom, adresseStructure, telephone, email } = req.body;
  datasource
    .query("UPDATE structure SET isCreche = ?, adresse = ?, telephone= ? WHERE email= ?",
      [isCreche, adresseStructure, telephone, email])
    .then(([structure]) => {
      if (structure.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        datasource.query("SELECT structureId from structure where email=?", [email])
          .then(([[id]]) => {
            const structureId = id.structureId;
            datasource
              .query("INSERT INTO assMat(nomNaissance, nomUsage, prenom, structureId) VALUES(?,?,?,?)",
                [nomNaissance, nomUsage, prenom, structureId])
              .then(() => {
                res.sendStatus(204);
              })
              .catch((err) => {
                console.error(err);
                res.status(500).send("Modification impossible");
              });
          })
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Modification impossible");
    });
});

const storageAvatar = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads/avatar')
  },
  filename: (req, file, cb) => {
    const date = new Date();
    cb(null, "avatar" + date.getMinutes() + Math.round(Math.random() * 1000) + ".jpeg")
  }
});

const uploadAvatar = multer({ storage: storageAvatar });

router.post("/photoProfil", uploadAvatar.single("avatar"), (req, res) => {
  res.send(req.file.filename);
});

router.put("/photoProfil", (req, res) => {
  const { photoProfil, email } = req.body;
  datasource
    .query("UPDATE structure SET photoProfil= ? WHERE email= ?",
      [photoProfil, email])
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

router.post("/auth", (req, res) => {
  datasource
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

router.delete("/calendrier", calendrier.deleteDates)
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

const express = require("express");
const router = express.Router();
const sha256 = require("js-sha256");
const datasource = require("../database");

const structure = require("./controllers/structure.controllers");
const horaires = require("./controllers/horaires.controllers");
const calendrier = require("./controllers/calendrier.controllers");
const dashboard = require("./controllers/dashboard.controllers");
const assMat = require("./controllers/assMat.controllers");
const creche = require("./controllers/creche.controllers");
const famille = require("./controllers/famille.controllers");

// --- pour app ---

router.get("/structure/allapp", structure.getAllStructures); //search
router.get("/horaires/:id", horaires.getHorairesById); //search
router.get("/structure/:id", structure.getStructureById); //notes
router.put("/structure/notes/:id", structure.updateNotes); //notes
router.get("/famille/conf/:id", famille.getPersoConfiance); //perso confiance
router.put("/structure/signal/:id", structure.updateSignal); // signalement
router.post("/reservation", famille.postReservation); // signalement

// --- --- ---

router.get("/structure/all", structure.getStructureDataMess);

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
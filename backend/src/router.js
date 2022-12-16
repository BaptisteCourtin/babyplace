const express = require("express");
const router = express.Router();
const sha256 = require("js-sha256");
const datasource = require("../database");

const structure = require("./controllers/structure.controllers");
const horaires = require('./controllers/horaires.controllers');
const calendrier = require('./controllers/calendrier.controllers');
const dashboard = require("./controllers/dashboard.controllers");


router.get("/horaires/all", (req, res) => {
  datasource
    .query("SELECT * FROM horaires")
    .then(([s]) => {
      res.json(s);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de connexion");
    });
});
router.get("/structure/all", structure.getStructureDataMess);

router.get('/structure', structure.getStructure);
router.get('/horaires', horaires.getHoraires);
router.get('/calendrier/:id', calendrier.getCalendrier);

router.put('/dashboard/day/:id', dashboard.updateDay);
router.put('/dashboard/hours/:id', dashboard.updateHours);
router.put('/dashboard/indemnRepas/:id', dashboard.updateIndemnRepas);
router.put('/calendrier/places/:id', calendrier.updatePlaces);

router.post('/auth', (req, res) => {
  datasource.query("SELECT * FROM structure WHERE email = ?", [req.body.email])
    .then(([[user]]) => {
      if (user && req.body.password === user.password) {
        const start = Date.now();
        const token = sha256(req.body.email + start);


        datasource.query("UPDATE structure SET token = ?, tokenStart = ? WHERE email = ?", [token, start, user.email])
          .then(() => {
            res.status(200).send({
              email: user.email,
              token: token,
              tokenStart: start
            })
          })
          .catch((err) => {
            console.error(err);
            res.status(500).send("Erreur de connexion")
          })
      } else {
        res.status(401).send("Email ou mot de passe incorrect")
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de connexion")
    })
})

module.exports = router;

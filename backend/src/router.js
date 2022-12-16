const express = require("express");
const router = express.Router();
const sha256 = require("js-sha256");
const datasource = require("../database");

const structure = require("./controllers/structure.controllers");
const dashboardControllers = require("./controllers/dashboard.controllers");

router.get("/structure", structure.getStructure);
router.get("/structure/all", (req, res) => {
  datasource
    .query("SELECT * FROM structure")
    .then(([s]) => {
      res.json(s);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur route /structure/all");
    });
});
router.get("/horaires/:id", (req, res) => {
  console.log(req);
  datasource
    // prend les horaires selon l'id de la structure
    .query(`SELECT * FROM horaires WHERE structureId = ?`, [req.params.id])
    .then(([s]) => {
      res.json(s);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur route /horaires/:id");
    });
});

router.put("/day/:id", dashboardControllers.updateDay);
router.put("/indemn_repas/:id", dashboardControllers.updateIndemnRepas);

router.post("/auth", (req, res) => {
  datasource
    .query("SELECT * FROM structure WHERE Email = ?", [req.body.email])
    .then(([[user]]) => {
      if (user && req.body.password === user.Password) {
        const start = Date.now();
        const token = sha256(req.body.email + start);

        datasource
          .query(
            "UPDATE structure SET token = ?, tokenStart = ? WHERE Email = ?",
            [token, start, user.Email]
          )
          .then(() => {
            res.status(200).send({
              email: user.Email,
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

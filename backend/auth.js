const express = require("express");
const datasource = require("./database");

const router = express.Router();
const sha256 = require("js-sha256");

router.post("/", (req, res) => {
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
              token,
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

router.put("/logout", (req, res) => {
  const { token } = req.body;
  console.log(req.body);

  datasource
    .query("UPDATE structure SET Token = ? WHERE Token = ?", [null, token])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error editing the database");
    });
});

module.exports = router;

const express = require("express")
const datasource = require("./database")
const router = express.Router()


router.get('/', (req, res) => {
    datasource.query("SELECT c.creche_id, c.Nom, s.Photo_profil FROM structure AS s JOIN creche AS c ON s.structure_id=c.structure_id")
        .then(([s]) => {
            res.json(s);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Erreur de connexion")
        })
})

module.exports = router;
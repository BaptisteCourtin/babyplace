const express = require("express")
const datasource = require("./database")
const router = express.Router()


router.get('/', (req, res) => {
    console.log(req.headers["x-token"]);
    datasource.query("SELECT * FROM structure AS s JOIN creche AS c ON s.structure_id=c.structure_id WHERE Token = ?", [req.headers["x-token"]])
        .then(([s]) => {
            res.json(s);
        }
        )
        .catch((err) => {
            console.error(err);
            res.status(500).send("Erreur de connexion")
        })
})

module.exports = router;
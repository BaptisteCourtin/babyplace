const express = require("express")
const datasource = require("./database")
const router = express.Router()

router.get('/', (req, res) => {
    datasource.query("SELECT * FROM message_room WHERE room=?", [req.headers.room])
        .then((s) => {
            res.json(s);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Erreur de connexion")
        })
})

module.exports = router;
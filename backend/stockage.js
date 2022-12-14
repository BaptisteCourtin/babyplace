const express = require("express")
const datasource = require("./database")
const router = express.Router()


router.post('/', (req, res) => {
    const { room, author, message, date } = req.body;
    datasource.query("INSERT INTO message_room (room, author, message, time) VALUES ( ? , ? , ?, ?)", [room, author, message, date])
        .then((result) => {
            if (result.affectedRows === 0) {
                res.status(404).send("Not Found");
            } else {
                res.status(200).send("Message sauvegardé");
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Erreur de connexion")
        })
})

module.exports = router;
const express = require("express")
const datasource = require("./database")
const router = express.Router()
const sha256 = require('js-sha256')

router.post('/', (req, res) => {
    datasource.query("SELECT * FROM structure WHERE Email = ?", [req.body.email])
        .then(([[user]]) => {
            if (user && req.body.password === user.Password) {
                const token = sha256('')
                const start = Date.now()

                datasource.query("UPDATE structure SET token = ?, tokenStart = ? WHERE Email = ?", [token, start, user.Email])
                    .then(() => {
                        res.status(200).send({
                            email: user.Email,
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
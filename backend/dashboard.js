const express = require("express")
const datasource = require("./database")
const router = express.Router()

router.put('/day/:id', (req, res) => {

    const { toggleDay, day, id } = req.body
    console.log(req.body)

    datasource
        .query(`UPDATE structure SET ${day} = ? WHERE Structure_id = ?`, [toggleDay, id])
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.status(404).send("Not found")
            } else {
                res.sendStatus(204)
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).send("Error editing the database")
        })
})

router.put('/places/:id', (req, res) => {

    const { places, id } = req.body

    datasource
        .query("UPDATE structure SET Nb_places = ? WHERE Structure_id = ?", [places, id])
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.status(404).send("Not found")
            } else {
                res.sendStatus(204)
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).send("Error editing the database")
        })
})

router.put('/hours/:id', (req, res) => {

    const { heure_min, heure_max, id } = req.body

    datasource
        .query("UPDATE structure SET Heure_min = ?, Heure_max = ? WHERE Structure_id = ?", [heure_min, heure_max, id])
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.status(404).send("Not found")
            } else {
                res.sendStatus(204)
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).send("Error editing the database")
        })
})

router.put('/indemn_repas/:id', (req, res) => {

    const { indemn_repas, id } = req.body
    console.log(req.body)

    datasource
        .query("UPDATE structure SET Indemn_repas = ? WHERE Structure_id = ?", [indemn_repas, id])
        .then(([result]) => {
            if (result.affectedRows === 0) {
                res.status(404).send("Not found")
            } else {
                res.sendStatus(204)
            }
        })
        .catch((err) => {
            console.error(err)
            res.status(500).send("Error editing the database")
        })
})

module.exports = router;
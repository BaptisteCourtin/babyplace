const express = require("express")
const datasource = require("./database")
const router = express.Router()

router.put('/:id', (req, res) => {

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

module.exports = router;
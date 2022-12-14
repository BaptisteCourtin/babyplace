const express = require("express");
const cors = require("cors");
const app = express();

const port = 5000;

app.use(cors())
app.use(express.json())

const auth = require('./auth')

const structure = require('./structure')

const structureData = require('./structure.data')

const dashboard = require('./dashboard')

const messages = require('./messages')

const stockage = require('./stockage')

app.use('/auth', auth)

app.use('/structure', structure)
app.use('/structure/all', structureData)

app.use('/dashboard', dashboard)
app.use('/messages', messages)

app.use('/stockage', stockage)

app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})

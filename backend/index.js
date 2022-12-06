const express = require("express");
const cors = require("cors")
const app = express();

const port = 5000;
app.use(cors())
app.use(express.json())

const auth = require('./auth')

app.use('/auth', auth)

app.listen(port, () => {
  console.log(`server started on port: ${port}`)
})
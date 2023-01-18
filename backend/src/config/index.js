const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(__dirname, '../../google-cloud-key.json')
require("dotenv").config();

const { Storage } = Cloud
const storage = new Storage({
    keyFilename: serviceKey,
    projectId: process.env.GCS_ID,
})

module.exports = storage
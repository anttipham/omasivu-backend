const express = require('express')
const cors = require('cors')

// Sovellus
const app = express()
app.use(cors())

// Kaikki staattiset tiedostot
app.use('/cv', express.static('build/cv'))

module.exports = app
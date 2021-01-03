const express = require('express')
const cors = require('cors')

// Sovellus
const app = express()
app.use(cors())

// Kaikki staattiset tiedostot
app.use('/cv', express.static('build/cv'))

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!').status(200)
})

module.exports = app
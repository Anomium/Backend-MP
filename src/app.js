const express = require('express')
const app = express()
const cors = require('cors')

// Settings
app.set('port', process.env.PORT || 4000)

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/articulo', require('./routes/articulo'))

module.exports = app
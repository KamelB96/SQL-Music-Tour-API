// DEPENDENCIES
const { Sequelize } = require('sequelize')
const express = require('express')
const app = express()
  
// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// BAND CONTROLLER
const bandsController = require('./controllers/bands_controller')
app.use('/bands', bandsController)

// EVENT CONTROLLER
const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController)

// STAGE CONTROLLER
const stagesController = require('./controllers/stages_controller')
app.use('/stages', stagesController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})
//Import Node.js Packages
const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose');
const compression = require('compression')

//Import Files
const middleware = require('./utilities/middleware');
const { allRoutes } = require('./Routes/allRoutes');

//Decleration Variables
const app = express()



// Middlewares-------------------------------------------------------------------------
app.use(compression({}))
app.use(cors())
app.use(morgan("dev"))
app.use(express.json({ strict: false,limit: '500mb' }))  // to support JSON-encoded bodies
app.use(express.urlencoded({extended:false})); // to support URL-encoded bodies
//app.use(express.static(path.join(__dirname, '/build'))) //this middleware commented because instead of serving html files as default, I set the route method
app.use(express.static(path.join(__dirname, '/404')))
app.use(middleware.requestLogger)
app.use(middleware.errorHandler)



// Routes--------------------------------------------------------------------------------

allRoutes(app)


//404 error middleware, **** must be at the end of all other routes ****
app.use(middleware.unknownEndpoint)

module.exports = app
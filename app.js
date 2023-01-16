//Import Node.js Packages
const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose');
const compression = require('compression')

//Import Files
const middleware = require('./utilities/middleware')

//Decleration Variables
const app = express()



// İmported Route files-------------------------------------------------------------------------
//const authRouter = require('./Routes/Route-Links/authRouter.js');
//const adminRouter = require('./Routes/Route-Links/adminRouter.js');





// Middlewares-------------------------------------------------------------------------
app.use(compression({}))
app.use(cors())
app.use(morgan("dev"))
app.use(express.json({ strict: false,limit: '500mb' }))
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '/build')))
app.use(express.static(path.join(__dirname, '/404')))
app.use(middleware.requestLogger)
app.use(middleware.errorHandler)
//app.use('/uploads', express.static(path.join(__dirname, '/../uploads')))




//app.use("/api/", stripeRouter)
//app.use("/api/auth", authRouter);


// Routes--------------------------------------------------------------------------------


//Frontend build files
app.get('/',(req,res,next)=>
{
    res.sendFile(path.join(__dirname, './index.html'))
    
}) 

//404 error middleware, **** must be at the end of all other routes ****
app.use(middleware.unknownEndpoint)

module.exports = app
require('dotenv').config({path:__dirname+'/.env'}) // must have to reach .env file through all files

//Import Node.js Packages
const app = require('./app.js')
const http = require('http')

//Import Files
const config = require('./Utilities/config')
const logger = require('./Utilities/logger')



const server = http.createServer(app)


server.listen(config.PORT, () => { logger.info(`Server is running at http://localhost:${config.PORT}`)})


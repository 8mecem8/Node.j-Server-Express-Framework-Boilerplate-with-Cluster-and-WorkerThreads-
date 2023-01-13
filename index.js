require('dotenv').config({path:__dirname+'/.env'}) // must have to reach .env file through all files

//Import Node.js Packages
const app = require('./app.js')
const http = require('http')

//Import Files
const config = require('./Utilities/config')
const {mongo} = require('./Databases/MongoDb/mongoose.js')

//Database------------------------------------------------------------------------------
 mongo()



const server = http.createServer(app)


server.listen(config.PORT, () => { console.log(`\n`,`${"\x1b[42m"} Server ${"\x1b[0m"}is running at http://localhost:${config.PORT} \n`)}) // start '\x1b[42m' and finish "\033[0m"  used to change font colors


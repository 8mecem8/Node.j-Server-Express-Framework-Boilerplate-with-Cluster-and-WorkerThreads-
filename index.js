require('dotenv').config({path:__dirname+'/.env'}) // must have to reach .env file through all files

//Import Node.js Packages
const OS = require('os');
const cluster = require('cluster');


//Import Files
const config = require('./Utilities/config')
const {mongo} = require('./Databases/MongoDb/mongoose.js')


process.env.UV_THREADPOOL_SIZE = OS.cpus().length
var nCpu = OS.cpus().length ;


//Database------------------------------------------------------------------------------
mongo()  //Start connection to MongoDb 


if(cluster.isMaster) 
{
    
    console.log('\n\nMaster cluster setting up ' + nCpu + ' workers...');

    for(var i = 0; i < nCpu; i++) {cluster.fork()};
    cluster.on('online', function(worker) {console.log('Worker ' + worker.process.pid + ' is \x1b[42monline\x1b[0m')});
    cluster.on('exit', function(worker, code, signal) {console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);console.log('Starting a new worker');cluster.fork();});
}
else
{
    
    
    
    const app = require('./app.js')
    
    app.listen(config.PORT, () => { console.log(`\n`,`${"\x1b[42m"} Server ${"\x1b[0m"}is running at http://localhost:${config.PORT}, Process \x1b[33m${process.pid}\x1b[0m is listening to all incoming requests \n`)}) // start '\x1b[42m' and finish "\033[0m"  used to change font colors
 
    
}





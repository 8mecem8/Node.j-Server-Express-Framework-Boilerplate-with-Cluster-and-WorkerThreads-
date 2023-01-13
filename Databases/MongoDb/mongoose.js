const { default: mongoose } = require('mongoose')
const config = require('../../Utilities/config.js')

exports.mongo = async () => 
{ 
  
try{   
                  mongoose.set('strictQuery', false)// DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7

     return await mongoose.connect( config.DB_C, {keepAlive: true,useNewUrlParser: true,useUnifiedTopology: true}, 
      (...arg)=>{ console.log(` ${"\x1b[42m"} Mongoose Client ${"\x1b[0m"}  has connected to Host`,'\x1b[32m', "\n\n Connnection details :", "\033[0m"  ); // start '\x1b[32m' and finish "\033[0m"  used to change font colors
                  
                        [arg]?.map(arg => 
                                  {
                                    /* Object.keys(arg?.[1]) */ 
                                    console.log(`╭${`―`.repeat(62)}╮`)
                                    console.log(`│`,` MongoDb Host Url =`, arg?.[1].connections[0].host,` `.repeat(1),`│`)
                                    console.log(`│`,` MongoDb Host Name =`, arg?.[1].connections[0].name,` `.repeat(28),`│`)
                                    console.log(`│`,` MongoDb Host Port =`, arg?.[1].connections[0].port,` `.repeat(33),`│`)
                                    console.log(`│`,` MongoDb Client Name =`, arg?.[1].connections[0]._connectionOptions.driverInfo.name,` `.repeat(28),`│`)
                                    console.log(`│`,` MongoDb Client Version =`, arg?.[1].connections[0]._connectionOptions.driverInfo.version,` `.repeat(28),`│`)
                                    console.log(`╰${`―`.repeat(62)}╯\n\n`)
                                  } )
                })
     }
catch{ err => {console.error('\x1b[31m Error connecting to mongo \x1b[0m', err)}}

   
}


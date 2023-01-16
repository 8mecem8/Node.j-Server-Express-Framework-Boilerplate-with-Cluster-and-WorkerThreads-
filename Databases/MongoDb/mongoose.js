const { default: mongoose } = require('mongoose')
const config = require('../../Utilities/config.js')

String.prototype.try = function(){ return this.length}


exports.mongo = async () => 
{ 
  
try{   
                  mongoose.set('strictQuery', false)// DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7
     return await mongoose.connect( config.DB_C, {keepAlive: true,useNewUrlParser: true,useUnifiedTopology: true},  //instead of using a callback func we can use mongoose.connection.once("once",()=>{console.log("")})
      (...arg)=>{ console.log(` ${"\x1b[42m"} Mongoose Client ${"\x1b[0m"}  has connected to Host`,'\x1b[32m', "\n\n Connnection details :", "\033[0m"  ); // start '\x1b[32m' and finish "\033[0m"  used to change font colors
                  
                        [arg]?.map(arg => 
                                  {
                                    /* Object.keys(arg?.[1]) */ 

                                    config.DB_C == undefined ? console.log(" \x1b[43m\x1b[31mThere is a problem with MangoDb setting at config.DB_C, Please check and fix it \x1b[0m") : ""

                                    console.log(`╭${`―`.repeat(62)}╮`) //the console.logs coded to stay inside of box thus whatever the length of the text always keep the end of the lınes as walls of the box you can adjust the size of the box
                                    console.log(`│  MongoDb Host Url = ${arg?.[1]?.connections[0]?.host} ${`│  MongoDb Host Url = ${arg?.[1]?.connections[0]?.host} `.try() < 65 ?  `│`.padStart(64 - `│  MongoDb Host Url = ${arg?.[1]?.connections[0]?.host} `.try(), ' ') : "|"}`)
                                    console.log(`│  MongoDb Host Name = ${arg?.[1]?.connections[0]?.name} ${`│  MongoDb Host Name = ${arg?.[1]?.connections[0]?.name} `.try() < 65 ?  `│`.padStart(64 - `│  MongoDb Host Name = ${arg?.[1]?.connections[0]?.name} `.try(), ' ') : "|"}`)
                                    console.log(`│  MongoDb Host Port = ${arg?.[1]?.connections[0]?.port} ${`│  MongoDb Host Port = ${arg?.[1]?.connections[0]?.port} `.try() < 65 ?  `│`.padStart(64 - `│  MongoDb Host Port = ${arg?.[1]?.connections[0]?.port} `.try(), ' ') : "|"}`)
                                    console.log(`│  MongoDb Client Name = ${arg?.[1]?.connections[0]?._connectionOptions.driverInfo.name} ${`│  MongoDb Client Name = ${arg?.[1]?.connections[0]?._connectionOptions.driverInfo.name} `.try() < 65 ?  `│`.padStart(64 - `│  MongoDb Client Name = ${arg?.[1]?.connections[0]?._connectionOptions.driverInfo.name} `.try(), ' ') : "|"}`)
                                    console.log(`│  MongoDb Client Version = ${arg?.[1]?.connections[0]?._connectionOptions.driverInfo.version} ${`│  MongoDb Client Version = ${arg?.[1]?.connections[0]?._connectionOptions.driverInfo.version} `.try() < 65 ?  `│`.padStart(64 - `│  MongoDb Client Version = ${arg?.[1]?.connections[0]?._connectionOptions.driverInfo.version} `.try(), ' ') : "|"}`)
                                    console.log(`╰${`―`.repeat(62)}╯\n\n`)
                                  } )
                })
     }
catch{ err => {console.error('\x1b[31m Error connecting to mongo \x1b[0m', err)}}

  //mongoose.connection.once("connected",(arg)=>{console.log("connected",arg)}) .try()
  mongoose.connection.once("disconnected",()=>{console.log("disconnected")})
}


//Import Node.js Packages
const { Worker } = require("worker_threads")


const heavyProcess = async (req,res,next)=>
{
    const worker =  new Worker("./Routes/Controllers/ControllerWorkers/EXAMLE_heavyProcessWorker.js")

    let message
    worker.on("message", (arg)=>{message = arg})
    worker.on('exit', (code) => {res.send(message)})
    //next()
}


module.exports={ heavyProcess }
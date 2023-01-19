//Import Node.js Packages
const { parentPort } = require("worker_threads")

let counter = 0
while(counter < 900000)
{
    counter++;
    console.log("Counter in heavyProcessWorker is",counter)
}

//parentPort.postMessage(`${counter} iterations completed ${new Date().toString().slice(0,24)} \n`)

const EXAMLE_heavyProcessRouter = require('express').Router()

// imported Controllers-------------------------------------------------------------------------
const { heavyProcess } = require('../Controllers/EXAMLE_heavyProcessController')





// imported Middlewares-------------------------------------------------------------------------
/* for this example we dont need */




// Routes-------------------------------------------------------------------------
EXAMLE_heavyProcessRouter.get('/',heavyProcess)




module.exports = EXAMLE_heavyProcessRouter

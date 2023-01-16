const EXAMPLE_authRouter = require('express').Router()

// imported Controllers-------------------------------------------------------------------------
const { createUpdateUser } = require('../Controllers/EXAMPLE_authController')
const { currentUserController } = require('../Controllers/EXAMPLE_authController')



// imported Middlewares-------------------------------------------------------------------------
const { authCheck } = require('../Middlewares/EXAMPLE_authMWs')




// Routes-------------------------------------------------------------------------
EXAMPLE_authRouter.post('/create-&-update-user',authCheck,createUpdateUser)
EXAMPLE_authRouter.post('/current-user',authCheck,currentUserController)



module.exports = EXAMPLE_authRouter



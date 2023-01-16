const authRouter = require('express').Router()

// imported Controllers-------------------------------------------------------------------------
const { createUpdateUser } = require('../Controllers/authController')
const { currentUserController } = require('../Controllers/authController')



// imported Middlewares-------------------------------------------------------------------------
const { authCheck } = require('../Middlewares/authMWs')




// Routes-------------------------------------------------------------------------
authRouter.post('/create-&-update-user',authCheck,createUpdateUser)
authRouter.post('/current-user',authCheck,currentUserController)












module.exports = authRouter



const EXAMPLE_stripeRouter = require('express').Router()



// imported Controllers-------------------------------------------------------------------------
const { createPaymentIntent } = require('../Controllers/EXAMPLE_stripeController');


// imported Middlewares-------------------------------------------------------------------------
const { authCheck} = require('../Middlewares/EXAMPLE_authMWs');



// Routes-------------------------------------------------------------------------
EXAMPLE_stripeRouter.post("/create-payment-intent", authCheck, createPaymentIntent);






module.exports = EXAMPLE_stripeRouter
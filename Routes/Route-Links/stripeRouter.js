const stripeRouter = require('express').Router()



// imported Controllers-------------------------------------------------------------------------
const { createPaymentIntent } = require('../Controllers/stripeController');


// imported Middlewares-------------------------------------------------------------------------
const { authCheck} = require('../Middlewares/authMWs');



// Routes-------------------------------------------------------------------------
stripeRouter.post("/create-payment-intent", authCheck, createPaymentIntent);






module.exports = stripeRouter
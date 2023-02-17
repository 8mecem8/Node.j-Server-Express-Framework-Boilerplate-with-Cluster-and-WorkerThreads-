
// İmported Route files-------------------------------------------------------------------------
const mainpageRouter = require("./Route-Links/serverMainPage")
const EXAMPLE_postgresqlRouter = require("./Route-Links/EXAMPLE_postgresqlRouter")
const EXAMPLE_authRouter = require("./Route-Links/EXAMPLE_authRouter");
const EXAMPLE_stripeRouter = require("./Route-Links/EXAMPLE_stripeRouter");
const EXAMLE_heavyProcessRouter = require("./Route-Links/EXAMLE_heavyProcessRouter");


exports.allRoutes = (app)=>
{   
    // @route:   /
    // @desc:    Server Serve Main Web Page
    // @access:  Public
    app.use('/',mainpageRouter)

    // @route:   /postgresql
    // @desc:    shows connection to PostgreSQL Server
    // @access:  Public
    app.use('/postgresql',EXAMPLE_postgresqlRouter)

    // @route:   /heavy
    // @desc:    this is simple test for Node.js concorrency
    // @access:  Public
    app.use('/heavy',EXAMLE_heavyProcessRouter)

    // @route:   /heY
    // @desc:    this is simple test for Node.js concorrency
    // @access:  Public
    app.use('/heY',async (req,res,next)=>
    {
        let counter = 0
        limit = 900000
        while(counter < limit)
        {
            counter++;
            console.log("Counter in hey is",counter)
        }

        if(limit == counter){res.send(`${counter} iterations completed in hey ${new Date().toString().slice(0,24)} \n`)}
    })

    // @route:   /api/create-payment-intent
    // @desc:    Example of Stripe payment endpoint
    // @access:  Public
    app.use("/api/", EXAMPLE_stripeRouter)

    // @route:   /api/auth/create-&-update-user
    //           /api/current-user 
    // @desc:    Example of Stripe payment endpoint
    // @access:  Public
    app.use("/api/auth", EXAMPLE_authRouter);
}
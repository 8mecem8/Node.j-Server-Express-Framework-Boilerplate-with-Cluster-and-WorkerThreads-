
// İmported Route files-------------------------------------------------------------------------
const mainpageRouter = require("./Route-Links/serverMainPage")
const EXAMPLE_authRouter = require("./Route-Links/EXAMPLE_authRouter");
const EXAMPLE_stripeRouter = require("./Route-Links/EXAMPLE_stripeRouter");
const EXAMLE_heavyProcessRouter = require("./Route-Links/EXAMLE_heavyProcessRouter");


exports.allRoutes = (app)=>
{   
    //Server Serve Main Web Page
    app.use('/',mainpageRouter)
    app.use('/heavy',EXAMLE_heavyProcessRouter)
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

    app.use("/api/", EXAMPLE_stripeRouter)
    app.use("/api/auth", EXAMPLE_authRouter);
}
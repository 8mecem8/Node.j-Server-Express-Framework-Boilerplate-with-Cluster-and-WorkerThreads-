
// İmported Route files-------------------------------------------------------------------------
const mainpageRouter = require("./Route-Links/serverMainPage")
const EXAMPLE_authRouter = require("./Route-Links/EXAMPLE_authRouter");
const EXAMPLE_stripeRouter = require("./Route-Links/EXAMPLE_stripeRouter");


exports.allRoutes = (app)=>
{   
    //Server Serve Main Web Page
    app.get('/',mainpageRouter)

    app.use("/api/", EXAMPLE_stripeRouter)
    app.use("/api/auth", EXAMPLE_authRouter);
}
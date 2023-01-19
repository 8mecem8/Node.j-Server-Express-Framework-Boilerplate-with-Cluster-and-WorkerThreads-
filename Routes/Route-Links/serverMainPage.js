const mainpageRouter = require('express').Router()



// imported Controllers-------------------------------------------------------------------------
const { serverMainPage } = require('../Controllers/mainPageController');



// imported Middlewares-------------------------------------------------------------------------
/* currenly no need for middleware */



// Routes-------------------------------------------------------------------------
mainpageRouter.get("/", serverMainPage);




module.exports = mainpageRouter
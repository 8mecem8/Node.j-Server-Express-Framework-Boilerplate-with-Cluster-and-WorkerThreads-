const EXAMPLE_postgresqlRouter = require('express').Router()



// imported Controllers-------------------------------------------------------------------------
const { querypostgresql } = require('../Controllers/EXAMPLE_postgresqlController');



// imported Middlewares-------------------------------------------------------------------------
/* currenly no need for middleware */



// Routes-------------------------------------------------------------------------
EXAMPLE_postgresqlRouter.get("/", querypostgresql);




module.exports = EXAMPLE_postgresqlRouter
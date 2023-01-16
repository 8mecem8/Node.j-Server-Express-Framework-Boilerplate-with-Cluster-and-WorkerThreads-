const cloudinaryRouter = require('express').Router()

// imported Middlewares-------------------------------------------------------------------------
const { authCheck,adminCheck } = require('../Middlewares/EXAMPLE_authMWs')

// controllers
const { upload, remove } = require("../Controllers/EXAMPLEcloudinaryController")



// Routes-------------------------------------------------------------------------
cloudinaryRouter.post("/uploadimages", authCheck, adminCheck, upload);
cloudinaryRouter.post("/removeimage", authCheck, adminCheck, remove);

module.exports = cloudinaryRouter;

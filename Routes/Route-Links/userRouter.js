const userRouter = require('express').Router()

// imported Controllers-------------------------------------------------------------------------
const { user, createOrder, addToWishlist, wishlist } = require('../Controllers/userController')



// imported Middlewares-------------------------------------------------------------------------
const { authCheck} = require('../Middlewares/authMWs')


// Routes-------------------------------------------------------------------------
userRouter.get('/user',user)
userRouter.post("/user/order", authCheck, createOrder); // stripe

// wishlist
userRouter.post("/user/wishlist", authCheck, addToWishlist);
userRouter.get("/user/wishlist", authCheck, wishlist);

module.exports = userRouter



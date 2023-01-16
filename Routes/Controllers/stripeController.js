const userModel = require('../../Models/userModel')
const cartModel = require('../../Models/cartModel')
const productModel = require('../../Models/productModel');
const stripe = require("stripe")(process.env.STRIPE_SECRET);



exports.createPaymentIntent = async (req, res) => {
  let finalAmount = 0;
  
  // 1 find user
  const user = await userModel.findOne({ email: req.body.user.email}).exec();
  // 2 get user cart total
  const { cartTotal } = await cartModel.findOne({orderdBy: user._id,}).exec();

  finalAmount = cartTotal * 100;
  
  // create payment intent with order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: finalAmount,
    currency: "usd",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    cartTotal,
    payable: finalAmount,
  });
};

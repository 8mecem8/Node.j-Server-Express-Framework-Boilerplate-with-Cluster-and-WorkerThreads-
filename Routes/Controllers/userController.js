const productModel = require('../../Models/productModel');
const userModel = require('../../Models/userModel')
const cartModel = require('../../Models/cartModel')
const filledOrderModel = require('../../Models/filledOrderModel')



exports.user = (req,res,next)=>
{
    res.send("user list is working")

}



exports.getUserCart = async (req, res) => {
  console.log(req.body.user.email)

  const user = await userModel.findOne({ email: req.body.user.email }).exec();

  let cart = await cartModel.findOne({ orderdBy: user._id })
    .populate("products.product", "_id title price totalAfterDiscount")
    .exec();

  const { products, cartTotal, totalAfterDiscount } = cart;
  res.json({ products, cartTotal, totalAfterDiscount });
};






exports.emptyCart = async (req, res) => {
  console.log("empty cart");
  const user = await userModel.findOne({ email: req.body.user.email }).exec();

  const cart = await cartModel.findOneAndRemove({ orderdBy: user._id }).exec();
  res.json(cart);
};






exports.saveAddress = async (req, res) => {

    console.log(req.body.address)
  const userAddress = await userModel.findOneAndUpdate(
    { email: req.body.user.email },
    { address: req.body.address }
  ).exec();

  res.json({ ok: true });

}









exports.createOrder = async (req, res) => {
   console.log(req.body);
  // return;
  const { paymentIntent } = req.body.stripeResponse;

  const user = await userModel.findOne({ email: req.body.user.email }).exec();

  let { products } = await cartModel.findOne({ orderdBy: user._id }).exec();

  let newOrder = await new filledOrderModel({
    products,
    paymentIntent,
    orderdBy: user._id,
  }).save();

  // decrement quantity, increment sold
  let bulkOption = products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item.product._id }, // IMPORTANT item.product
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    };
  });

  let updated = await productModel.bulkWrite(bulkOption, {});
  console.log("PRODUCT QUANTITY-- AND SOLD++", updated);

  console.log("NEW ORDER SAVED", newOrder);
  res.json({ ok: true });
};







exports.createCashOrder = async (req, res) => {
  const { COD, couponApplied } = req.body;
  // if COD is true, create order with status of Cash On Delivery

  if (!COD) return res.status(400).send("Create cash order failed");

  const user = await userModel.findOne({ email: req.user.email }).exec();

  let userCart = await cartModel.findOne({ orderdBy: user._id }).exec();

  let finalAmount = 0;

  if (couponApplied && userCart.totalAfterDiscount) {
    finalAmount = userCart.totalAfterDiscount * 100;
  } else {
    finalAmount = userCart.cartTotal * 100;
  }

  let newOrder = await new filledOrderModel({
    products: userCart.products,
    paymentIntent: {
      id: 234 ,//uniqueid(),
      amount: finalAmount,
      currency: "usd",
      status: "Cash On Delivery",
      created: Date.now(),
      payment_method_types: ["cash"],
    },
    orderdBy: user._id,
    orderStatus: "Cash On Delivery",
  }).save();

  // decrement quantity, increment sold
  let bulkOption = userCart.products.map((item) => {
    return {
      updateOne: {
        filter: { _id: item.product._id }, // IMPORTANT item.product
        update: { $inc: { quantity: -item.count, sold: +item.count } },
      },
    };
  });

  let updated = await Product.bulkWrite(bulkOption, {});
  console.log("PRODUCT QUANTITY-- AND SOLD++", updated);

  console.log("NEW ORDER SAVED", newOrder);
  res.json({ ok: true });
};









exports.orders = async (req, res) => {
  let user = await userModel.findOne({ email: req.body.user.email }).exec();

  let userOrders = await filledOrderModel.find({ orderdBy: user._id })
    .populate("products.product")
    .populate({
      path: 'orderdBy',
     model: 'User'
    })
    .exec();

  res.json(userOrders);
};




// addToWishlist wishlist removeFromWishlist
exports.addToWishlist = async (req, res) => {

try {

  const { productId } = req.body;

  

  const user = await userModel.findOneAndUpdate(
    { email: req.body.user.email },
    { $addToSet: { wishlist: productId } }
  ).populate({
      path: 'wishlist',
     model: 'Product'
    })
  .exec();

  res.json({ ok: true });

  } catch (err) {
     console.log("err.errors is =============================>",err & err.message && Object.entries(err.errors)[0][1].properties.message);
     console.table(err.message);
    res.status(400).json("***Adding item to wishlist has Failed***"+" | "+ " " +"Error Message == "+ err.message || err._message+" "+"|| Main Reason =====> "+ err & err.message && Object.entries(err.errors)[0][1].properties.message);
}
};

exports.wishlist = async (req, res) => {
  const list = await userModel.findOne({ email: req.body.user.email })
    .select("wishlist")
    .populate({
      path: 'wishlist',
     model: 'Product'
    })
    .exec();

  res.json(list);
};

exports.removeFromWishlist = async (req, res) => {
  const { productId } = req.params;
  const user = await userModel.findOneAndUpdate(
    { email: req.body.user.email },
    { $pull: { wishlist: productId } }
  ).populate({
      path: 'wishlist',
     model: 'Product'
    }).exec();

  res.json({ ok: true });
};
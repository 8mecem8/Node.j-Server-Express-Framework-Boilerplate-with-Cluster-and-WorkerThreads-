const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: [1000,'too long title'],
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: [99000,'too long description'],
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: [50,'too big number for price'],
    },
     category: {
       type: ObjectId,
       ref: "Category",
     },
     subcategory: 
       [
         {
         type: ObjectId,
         ref: "SubCategory",
         }
       ]
     ,
    quantity: Number,
     sold: {
       type: Number,
       default: 0,
     },
     images: {
       type: Array,
     },
    shipping: {
      type: String,
      collation:{strength: 1 },
      enum: ["Yes", "No"],
      
    },
    color: {
      type: String,
    },
    brand: {
      type: String,
    },
    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
 
  },
  { timestamps: true }
);

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel

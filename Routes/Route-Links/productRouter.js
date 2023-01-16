const productRouter = require('express').Router()

// imported Controllers-------------------------------------------------------------------------
const {
  create,
  update,
  remove,
  listAll,
  orderList,
  totalNumberProduct,
  getSingleProductInfo,
  productStar,
  listRelated,
  searchFilters,
  filterColor
} = require("../Controllers/productController")



// imported Middlewares-------------------------------------------------------------------------
const { authCheck,adminCheck } = require('../Middlewares/authMWs')




// Routes-------------------------------------------------------------------------
productRouter.post("/product", authCheck, adminCheck, create);
productRouter.get("/products/total", totalNumberProduct);
productRouter.get("/product/:count", listAll);
productRouter.delete("/product/:slug", authCheck, adminCheck, remove);
productRouter.get("/products/:slug", getSingleProductInfo);
productRouter.put("/product/:slug", authCheck, adminCheck, update);
productRouter.post("/products", orderList);


// rating-------------------------------------------------------------------------
productRouter.put("/product/star/:productId", authCheck, productStar);


// related-------------------------------------------------------------------------
productRouter.get("/product/related/:productId", listRelated);


// Search-------------------------------------------------------------------------
productRouter.post("/search/filters", searchFilters);

// Search-------------------------------------------------------------------------

productRouter.get("/filter/color", filterColor);


module.exports = productRouter



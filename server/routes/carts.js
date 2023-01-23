const cartsRouter = require("express").Router();
const {
  addCarts,
  getCarts,
  addCartsPage,
  deleteCart,
  payCart,
} = require("../controller/cartsController");

cartsRouter.post("/add", addCarts);
cartsRouter.post("/add/cart", addCartsPage);
cartsRouter.get("/get/:id", getCarts);
cartsRouter.get("/delete/:id", deleteCart);
cartsRouter.post("/pay/:id", payCart);

module.exports = cartsRouter;

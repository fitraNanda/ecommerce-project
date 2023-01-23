const cartsRouter = require("express").Router();
const {
  addCarts,
  getCarts,
  addCartsPage,
  deleteCart,
} = require("../controller/cartsController");

cartsRouter.post("/add", addCarts);
cartsRouter.post("/add/cart", addCartsPage);
cartsRouter.get("/get/:id", getCarts);
cartsRouter.get("/delete/:id", deleteCart);

module.exports = cartsRouter;

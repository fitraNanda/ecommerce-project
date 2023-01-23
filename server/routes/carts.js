const cartsRouter = require("express").Router();
const { addCarts, getCarts } = require("../controller/cartsController");

cartsRouter.post("/add", addCarts);
cartsRouter.get("/get", getCarts);

module.exports = cartsRouter;

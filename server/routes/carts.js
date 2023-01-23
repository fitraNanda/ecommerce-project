const cartsRouter = require("express").Router();
const { addCarts, getCarts } = require("../controller/cartsController");

cartsRouter.post("/add", addCarts);
cartsRouter.get("/get/:id", getCarts);

module.exports = cartsRouter;

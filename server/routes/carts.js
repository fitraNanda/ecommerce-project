const cartsRouter = require("express").Router();
const { addCarts } = require("../controller/cartsController");

cartsRouter.post("/add", addCarts);

module.exports = cartsRouter;

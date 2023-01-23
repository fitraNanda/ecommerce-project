const route = require("express").Router();
const usersRouter = require("./users");
const productsRouter = require("./products");
const categoriesRouter = require("./categories");
const cartsRouter = require("./carts");

route.use("/users", usersRouter);
route.use("/products", productsRouter);
route.use("/categories", categoriesRouter);
route.use("/carts", cartsRouter);

route.get("/", (req, res) => {
  res.status(200).send("router hidup");
});

module.exports = route;

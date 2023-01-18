const route = require("express").Router();
const usersRouter = require("./users");
const productsRouter = require("./products");
const categoriesRouter = require("./categories");

route.use("/users", usersRouter);
route.use("/products", productsRouter);
route.use("/categories", categoriesRouter);

route.get("/", (req, res) => {
  res.status(200).send("router hidup");
});

module.exports = route;

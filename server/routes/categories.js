const categoriesRouter = require("express").Router();
const { add } = require("../controller/categoriesController");

categoriesRouter.post("/add", add);

module.exports = categoriesRouter;

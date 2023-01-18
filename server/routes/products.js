const productsRouter = require("express").Router();
const { uploadFile, get } = require("../controller/productsController");

productsRouter.post("/upload", uploadFile);
productsRouter.get("/get", get);

module.exports = productsRouter;

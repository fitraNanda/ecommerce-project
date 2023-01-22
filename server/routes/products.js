const productsRouter = require("express").Router();
const {
  uploadFile,
  get,
  updateFile,
} = require("../controller/productsController");

productsRouter.post("/upload", uploadFile);
productsRouter.get("/get", get);
productsRouter.post("/update/:id", updateFile);

module.exports = productsRouter;

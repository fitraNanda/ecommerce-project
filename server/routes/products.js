const productsRouter = require("express").Router();
const {
  uploadFile,
  get,
  updateFile,
  deleteFile,
} = require("../controller/productsController");

productsRouter.post("/upload", uploadFile);
productsRouter.get("/get", get);
productsRouter.post("/update/:id", updateFile);
productsRouter.post("/delete/:id", deleteFile);

module.exports = productsRouter;

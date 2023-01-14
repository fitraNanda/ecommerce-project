const usersRouter = require("express").Router();
const { get, register } = require("../controller/usersController");

usersRouter.get("/", get);
usersRouter.post("/register", register);

module.exports = usersRouter;

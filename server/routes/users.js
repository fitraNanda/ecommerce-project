const usersRouter = require("express").Router();
const UsersController = require("../controller/usersController");

usersRouter.get("/");

module.exports = usersRouter;

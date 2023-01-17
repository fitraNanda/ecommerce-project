const usersRouter = require("express").Router();
const {
  get,
  register,
  verif,
  login,
} = require("../controller/usersController");
const { auth } = require("../helper/authToken");

usersRouter.get("/", get);
usersRouter.post("/register", register);
usersRouter.patch("/verif", auth, verif);
usersRouter.post("/login", login);

module.exports = usersRouter;

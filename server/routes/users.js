const usersRouter = require("express").Router();
const {
  get,
  register,
  verif,
  login,
  logout,
} = require("../controller/usersController");
const { auth } = require("../helper/authToken");

usersRouter.get("/", get);
usersRouter.post("/register", register);
usersRouter.patch("/verif", auth, verif);
usersRouter.post("/login", login);
usersRouter.get("/logout", logout);

module.exports = usersRouter;

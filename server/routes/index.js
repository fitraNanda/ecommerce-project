const route = require("express").Router();
const usersRouter = require("./users");

route.use("/users", usersRouter);

route.get("/", (req, res) => {
  res.status(200).send("router hidup");
});

module.exports = route;

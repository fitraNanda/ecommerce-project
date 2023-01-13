const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3300;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).send("hidup");
});

app.listen(port, () => {
  console.log("server berjalan pada port " + port);
});

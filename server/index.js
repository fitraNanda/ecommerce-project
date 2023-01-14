const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3300;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const route = require("./routes");
app.use(route);

app.listen(port, () => {
  console.log("server berjalan pada port " + port);
});

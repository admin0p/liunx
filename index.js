const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const banner_routes = require("./routes/banner");

app.use(express.urlencoded({ extended: true }));

app.use(banner_routes);

mongoose
  .connect("mongodb://localhost/bannerDB")
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

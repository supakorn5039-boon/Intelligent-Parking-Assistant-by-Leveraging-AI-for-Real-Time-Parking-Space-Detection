const express = require("express");
require("dotenv").config();
const mongoose = require('mongoose')



const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from Server </h1>");
});

app.listen(3000, () => {
  console.log("Port is Running");
});

const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.post('/create-user')

app.get("/", (req, res) => {
  res.send("<h1>Hello from Server </h1>");
});

app.listen(3000, () => {
  console.log("Port is Running");
});

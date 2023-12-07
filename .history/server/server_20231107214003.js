const express = require("express");

const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const morgan = require("morgan");
const connectDB = require("./config/db");

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

connectDB();
const { readdirSync } = require("fs");

app.use(bodyParser.json());

readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));

app.listen(3000, () => console.log("Server is Running on port 3000"));

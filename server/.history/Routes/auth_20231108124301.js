const express = require("express");
const router = express.Router();

const { register, login } = require("../Controller/auth");
const { auth } = require("../Middleware/auth");

router.post("/register", auth, register);
router.post("/login", auth, login);

module.exports = router;

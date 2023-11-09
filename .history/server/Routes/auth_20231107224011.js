const express = require("express");
const router = express.Router();

const { register, login } = require("../Controller/auth");

router.get("/register", register);
router.post("/register", register);
router.post("/login", login);

module.exports = router;

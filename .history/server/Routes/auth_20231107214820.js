const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Hello auth");
});
router.post("/login", (req, res) => {
  res.send("Hello Login");
});

module.exports = router;

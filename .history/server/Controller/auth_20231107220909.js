const Users = require("../Model/Users");
const jsonwebcrypt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    res.send(req.body);
    console.log(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  try {
    res.send("Hello Login");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

const Users = require("../Model/Users");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  try {
    // 1.CheckUser
    console.log(req.body);
    const { name, password } = req.body;

    // 2.Encrypt

    // 3.Save

    res.send(req.body);
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

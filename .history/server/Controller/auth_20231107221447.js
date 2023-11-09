const Users = require("../Model/Users");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    // 1.CheckUser
    const { name, password } = req.body;

    const user = await Users.findOne({ name });
    console.log(user);

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

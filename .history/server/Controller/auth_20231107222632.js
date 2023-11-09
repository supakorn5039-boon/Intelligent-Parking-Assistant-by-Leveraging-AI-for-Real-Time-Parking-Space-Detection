const Users = require("../Model/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    // 1.CheckUser
    const { name, password } = req.body;

    var user = await Users.findOne({ name });
    console.log(user);

    if (user) {
      return res.send("User already exist!!!").status(400);
    }
    // 2.Encrypt
    const salt = await bcrypt.genSalt(10);
    user = new Users({
      name,
      password,
    });
    user.password = await bcrypt.hash(password, salt);

    // 3.Save
    await user.save();
    res.send("Register Success");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.login = async (req, res) => {
  try {
    // 1 Check User
    const { name, password } = req.body;

    // 2 Payload

    // 3 Generated Token

    res.send("Hello Login");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];
    if (!token) {
      return res.status(401).send("No Token");
    }

    const decode = jwt.verify(token, "jwtsecret");
    console.log(decode);

    next();
  } catch (err) {
    console.log(err);
    res.send("Server Error").status(500);
  }
};

exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];
    console.log(token);
    next();
  } catch (err) {
    console.log(err);
    res.send("Server Error").status(500);
  }
};

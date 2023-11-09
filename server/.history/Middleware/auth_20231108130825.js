exports.auth = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];
    if (!token) {
      return res.status(401).send("No Token");
    }
  } catch (err) {
    console.log(err);
    res.send("Server Error").status(500);
  }
};

exports.register = async (req, res) => {
  try {
    res.send("");
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);

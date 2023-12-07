const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    password:{
      type
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    password:{
      
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  joined: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

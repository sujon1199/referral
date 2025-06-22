const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  referralCode: {
    type: String,
    unique: true,
  },

  referredBy: {
    type: String,
    default: null,
  },

  referralTree: {
    type: [String], // up to 10 levels
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);

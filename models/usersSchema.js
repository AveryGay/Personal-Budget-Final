const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 255,
    },
  },
  { collection: 'users' }
);

module.exports = mongoose.model('users', userSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true, versionKey: false }
);

// Create a model using the schema
const User = mongoose.model("user", userSchema);

module.exports = User;

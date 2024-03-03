const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
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
    std: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    mobileNo: {
      type: Number,
      required: true,
    },
    schoolName: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;

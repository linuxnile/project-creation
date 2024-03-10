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
    question1: {
      type: String,
      required: true,
    },
    question2: {
      type: String,
      required: true,
    },
    question3: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamp: true,
  }
);

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;

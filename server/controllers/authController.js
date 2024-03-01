const User = require("../models/userModel");

const test = (req, res) => {
  res.json("Test is working");
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    // std,
    address,
    mobileNo,
    schoolName,
  });
};

module.exports = { test, registerUser };

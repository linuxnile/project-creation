const User = require("../models/userModel");

const test = (req, res) => {
  res.json("Test is working");
};

const registerUser = async (req, res) => {
  const { name, email, password, std, address, mobileNo, schoolName } =
    req.body;
  const user = await User.create({
    name,
    email,
    password,
    std,
    address,
    mobileNo,
    schoolName,
  });
  return res.json(user);
};

module.exports = { test, registerUser };

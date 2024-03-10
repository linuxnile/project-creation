const router = require("express").Router();
const user = require("../models/userModel");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  try {
    const userExists = await user.findOne({
      email: req.body.email,
    });

    if (userExists) {
      return res
        .status(200)
        .send({ message: "User already exists", success: false });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    const newUser = new user(req.body);
    await newUser.save();

    res.send({
      message: "User create successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

module.exports = router;

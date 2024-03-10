const mongoose = require("mongoose");

const connection = mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Problem occur", err));

module.exports = connection;

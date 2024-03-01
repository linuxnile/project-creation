const express = require("express");
const dotenv = require("dotenv").config();
const { mongoose } = require("mongoose");

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log("Problem occur", err));

app.use("/", require("./routes/authRoutes"));

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on ${port} port`));

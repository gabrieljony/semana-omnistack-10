const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack10:omnistack10@cluster0-huve3.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(routes);

module.exports = app;

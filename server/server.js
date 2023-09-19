
const express = require('express');
const app = express();
const cors = require('cors'); // Import cors module
const routeUrls = require('./routes/routes');
const mongoose = require('mongoose');
require("dotenv").config();
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");

dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("MongoDB is connected.")
);

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/", routeUrls);

app.listen(4000, () => console.log("Server is up and running!"));
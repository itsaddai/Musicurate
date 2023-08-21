const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("MongoDB is connected!"))


app.listen(4000, () => console.log("Server is up and running!"))
const express = require('express');
const app = express()
const cors = require('cors')
const routeUrls = require('./routes/routes')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("MongoDB is connected."))

app.use(express.json())
app.use(cors())
app.use('/app', routeUrls)
app.listen(4000, () => console.log("Server is up and running!"))
const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/db');
const cors = require("cors")


const app = express();

// express middlewares:--:
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

// init connection to db
dbConnect();

const userRoutes = require('./routes/userRoutes.js')

app.use('/', userRoutes);



module.exports = app;

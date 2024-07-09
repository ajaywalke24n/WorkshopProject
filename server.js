const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require('colors');
const morgan = require("morgan");
const connectdb = require("./config/db");

dotenv.config({path: './utils/.env'});

const app = new express();
connectdb();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT || 8080;

// Pls add the necessary routes here -->

app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT} in mode ${process.env.DEV_MODE}`.bgBlue.white);
});
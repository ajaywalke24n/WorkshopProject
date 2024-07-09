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
app.use('/api/v1/test', require('./routers/testRoutes'));
app.use('/api/v1/student', require('./routers/studentRoute'));
app.use('/api/v1/view', require('./routers/viewRoute'));
app.use('/api/v1/email', require('./routers/emailRoute'));

app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT} in mode ${process.env.DEV_MODE}`.bgBlue.white);
});
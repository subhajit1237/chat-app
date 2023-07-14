const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const { chats } = require("./data/data");
const { log } = require("console");
const connectDB = require("./config/db");
const colors = require('colors');
const userRouters = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

connectDB();

app.use(express.json());  // to access JSON data

app.get('/', (req, res) => {
    res.send("API is running");
})

app.use('/api/user', userRouters);

app.use(notFound);
app.use(errorHandler)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is connected @ http://127.0.0.1:${port}`.yellow.bold);
});
const mongoose = require("mongoose");
require("dotenv").config();
// const URI = 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@cluster0.covjhoe.mongodb.net/' + process.env.DB_NAME + '?retryWrites=true&w=majority';
const URI = "mongodb+srv://hawt_sauce:VmDA5oqizhTwIQdt@cluster0.covjhoe.mongodb.net/?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;

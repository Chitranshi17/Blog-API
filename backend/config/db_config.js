const mongoose = require('mongoose');

const connectDB = async() => {
  try {
    const conn = await mongoose.connect(process.env.Mongo_URI)
    console.log(`DB Connection Successfull : ${conn.connection.host}`.bgGreen)
  } catch (error) {
    console.log(`Something Went Wrong : ${error.message}`.bgRed)
  }
}

module.exports = connectDB;
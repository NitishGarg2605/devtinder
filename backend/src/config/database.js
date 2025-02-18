const mongoose = require("mongoose");
require('dotenv').config();
console.log(process.env.MONGO_URL);
const connectDB = async () => {
  await mongoose.connect(
     process.env.MONGO_URL
  );
};

module.exports = connectDB;

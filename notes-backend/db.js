// const mongoose = require("mongoose")
// require("dotenv").config()

// const connection = mongoose.connect(process.env.mongoURL)

// module.exports = {
//     connection,
// };









// const mongoose = require("mongoose");
// require("dotenv").config();

// const connection = mongoose.connect(process.env.mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//     console.log("✅ MongoDB connected successfully");
// });

// mongoose.connection.on("error", (err) => {
//     console.error("❌ MongoDB connection error:", err);
// });

// module.exports = { connection };








// const mongoose = require("mongoose");
// require("dotenv").config();

// const connection = mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("✅ MongoDB connected successfully");
// });

// mongoose.connection.on("error", (err) => {
//   console.error("❌ MongoDB connection error:", err);
// });

// module.exports = { connection };

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `[DB] Connected: host=${conn.connection.host}, db=${conn.connection.name}`
    );
  } catch (error) {
    console.error(`[DB] Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;


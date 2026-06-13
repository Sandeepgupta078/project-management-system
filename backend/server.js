import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

const server = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`
====================================
🚀 Server Running Successfully
🌐 URL  : http://localhost:${PORT}
📦 Mode : ${process.env.NODE_ENV}
====================================
      `);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

server();
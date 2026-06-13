import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import User from "./models/User.js";

await mongoose.connect(process.env.MONGO_URI);

const adminExists = await User.findOne({
  email: "admin@test.com",
});

if (!adminExists) {
  await User.create({
    name: "Super Admin",
    email: "admin@test.com",
    password: "Admin@123",
    role: "Admin",
  });

  console.log("✅ Admin created");
} else {
  console.log("⚠️ Admin already exists");
}

process.exit();
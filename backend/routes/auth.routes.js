import express from "express";

import {
  login,
  register,
  getMe,
} from "../controllers/auth.controller.js";

import protect from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import validate from "../middleware/validate.middleware.js";

import {
  registerValidation,
  loginValidation,
} from "../validations/auth.validation.js";

const router = express.Router();

// Public
router.post(
  "/login",
  loginValidation,
  validate,
  login
);

// Admin only
router.post(
  "/register",
  protect,
  authorize("Admin"),
  registerValidation,
  validate,
  register
);

// Logged in user
router.get(
  "/me",
  protect,
  getMe
);

export default router;
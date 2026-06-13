import express from "express";

import protect from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import {
  getAnalytics,
} from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get(
  "/analytics",
  protect,
  authorize("Admin"),
  getAnalytics
);

export default router;
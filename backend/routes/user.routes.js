import express from "express";

import protect from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import validate from "../middleware/validate.middleware.js";

import {
  updateProfileValidation,
  updateRoleValidation,
} from "../validations/user.validation.js";

import {
  getAllUsers,
  getSingleUser,
  updateMyProfile,
  updateUser,
  changeRole,
  removeUser,
} from "../controllers/user.controller.js";

const router = express.Router();

// Admin Routes
router.get(
  "/",
  protect,
  authorize("Admin"),
  getAllUsers
);

router.get(
  "/:id",
  protect,
  authorize("Admin"),
  getSingleUser
);

router.put(
  "/:id",
  protect,
  authorize("Admin"),
  updateProfileValidation,
  validate,
  updateUser
);

router.patch(
  "/:id/role",
  protect,
  authorize("Admin"),
  updateRoleValidation,
  validate,
  changeRole
);

router.delete(
  "/:id",
  protect,
  authorize("Admin"),
  removeUser
);

// Logged-in User
router.put(
  "/profile/update",
  protect,
  updateProfileValidation,
  validate,
  updateMyProfile
);

export default router;
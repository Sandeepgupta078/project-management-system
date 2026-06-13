import express from "express";

import protect from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

import upload from "../config/multer.js";
import validate from "../middleware/validate.middleware.js";

import {
  createProjectValidation,
  updateStatusValidation,
} from "../validations/project.validation.js";

import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
  updateStatus,
} from "../controllers/project.controller.js";

const router = express.Router();

router.get(
  "/",
  protect,
  getProjects
);

router.get(
  "/:id",
  protect,
  getProject
);

router.post(
  "/",
  protect,
  authorize("Admin"),
  upload.array(
    "attachments",
    3
  ),
  createProjectValidation,
  validate,
  createProject
);

router.put(
  "/:id",
  protect,
  authorize("Admin"),
  updateProject
);

router.delete(
  "/:id",
  protect,
  authorize("Admin"),
  deleteProject
);

router.patch(
  "/:id/status",
  protect,
  updateStatusValidation,
  validate,
  updateStatus
);

export default router;
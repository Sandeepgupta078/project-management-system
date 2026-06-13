import { body } from "express-validator";

export const createProjectValidation = [
  body("title")
    .notEmpty()
    .withMessage("Title is required"),

  body("description")
    .notEmpty()
    .withMessage(
      "Description is required"
    ),

  body("startDate")
    .notEmpty()
    .withMessage(
      "Start date is required"
    ),

  body("endDate")
    .notEmpty()
    .withMessage(
      "End date is required"
    ),
];

export const updateStatusValidation = [
  body("status")
    .isIn([
      "Pending",
      "In-Progress",
      "Completed",
    ])
    .withMessage("Invalid status"),
];
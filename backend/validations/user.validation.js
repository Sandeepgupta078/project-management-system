import { body } from "express-validator";

export const updateProfileValidation = [
  body("name").optional().trim().notEmpty().withMessage("Name cannot be empty"),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Please provide a valid email"),
];

export const updateRoleValidation = [
  body("role")
    .notEmpty()
    .withMessage("Role is required")
    .isIn(["Admin", "User"])
    .withMessage("Role must be Admin or User"),
];

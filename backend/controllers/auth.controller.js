import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  loginUser,
  createUser,
} from "../services/auth.service.js";

export const login = asyncHandler(
  async (req, res) => {
    const { email, password } = req.body;

    const data = await loginUser(
      email,
      password
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Login successful",
        data
      )
    );
  }
);

export const register = asyncHandler(
  async (req, res) => {
    const user = await createUser(req.body);

    return res.status(201).json(
      new ApiResponse(
        201,
        "User created successfully",
        {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
      )
    );
  }
);

export const getMe = asyncHandler(
  async (req, res) => {
    return res.status(200).json(
      new ApiResponse(
        200,
        "Profile fetched successfully",
        req.user
      )
    );
  }
);
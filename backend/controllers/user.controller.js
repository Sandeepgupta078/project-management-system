import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  getUsers,
  getUserById,
  updateProfile,
  updateUserByAdmin,
  updateUserRole,
  deleteUser,
} from "../services/user.service.js";

export const getAllUsers = asyncHandler(
  async (req, res) => {
    const data = await getUsers(req.query);

    res.status(200).json(
      new ApiResponse(
        200,
        "Users fetched successfully",
        data
      )
    );
  }
);

export const getSingleUser = asyncHandler(
  async (req, res) => {
    const user = await getUserById(
      req.params.id
    );

    res.status(200).json(
      new ApiResponse(
        200,
        "User fetched successfully",
        user
      )
    );
  }
);

export const updateMyProfile =
  asyncHandler(async (req, res) => {
    const user = await updateProfile(
      req.user._id,
      req.body
    );

    res.status(200).json(
      new ApiResponse(
        200,
        "Profile updated successfully",
        user
      )
    );
  });

export const updateUser =
  asyncHandler(async (req, res) => {
    const user =
      await updateUserByAdmin(
        req.params.id,
        req.body
      );

    res.status(200).json(
      new ApiResponse(
        200,
        "User updated successfully",
        user
      )
    );
  });

export const changeRole =
  asyncHandler(async (req, res) => {
    const user = await updateUserRole(
      req.params.id,
      req.body.role
    );

    res.status(200).json(
      new ApiResponse(
        200,
        "Role updated successfully",
        {
          _id: user._id,
          name: user.name,
          role: user.role,
        }
      )
    );
  });

export const removeUser =
  asyncHandler(async (req, res) => {
    await deleteUser(req.params.id);

    res.status(200).json(
      new ApiResponse(
        200,
        "User deleted successfully"
      )
    );
  });
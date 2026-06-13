import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  getDashboardAnalytics,
} from "../services/dashboard.service.js";

export const getAnalytics =
  asyncHandler(async (req, res) => {
    const analytics =
      await getDashboardAnalytics();

    return res.status(200).json(
      new ApiResponse(
        200,
        "Dashboard analytics fetched successfully",
        analytics
      )
    );
  });
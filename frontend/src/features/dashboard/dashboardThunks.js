import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDashboardApi } from "../../api/dashboardApi";

export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async (_, thunkAPI) => {
    try {
      const response = await getDashboardApi();

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to load dashboard",
      );
    }
  },
);

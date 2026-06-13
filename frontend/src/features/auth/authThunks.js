import { createAsyncThunk } from "@reduxjs/toolkit";

import { loginApi, getProfileApi } from "../../api/authApi";

import { storage } from "../../utils/storage";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await loginApi(credentials);

      // response = {
      //   success,
      //   message,
      //   data: {
      //     token,
      //     user
      //   }
      // }

      storage.setToken(response.data.token);

      storage.setUser(response.data.user);

      return {
        token: response.data.token,
        user: response.data.user,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed",
      );
    }
  },
);

export const loadProfile = createAsyncThunk(
  "auth/profile",
  async (_, thunkAPI) => {
    try {
      const response = await getProfileApi();

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to load profile",
      );
    }
  },
);

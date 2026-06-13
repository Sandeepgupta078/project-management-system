import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getUsersApi,
  createUserApi,
  updateUserApi,
  deleteUserApi,
} from "../../api/userApi";

// =========================
// FETCH USERS
// =========================
export const fetchUsers =
  createAsyncThunk(
    "users/fetchUsers",
    async (
      params,
      thunkAPI
    ) => {
      try {
        const response =
          await getUsersApi(
            params
          );

        // getUsersApi already returns response.data
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data
            ?.message ||
            "Failed to fetch users"
        );
      }
    }
  );

// =========================
// CREATE USER
// =========================
export const createUser =
  createAsyncThunk(
    "users/createUser",
    async (
      payload,
      thunkAPI
    ) => {
      try {
        const response =
          await createUserApi(
            payload
          );

        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data
            ?.message ||
            "Failed to create user"
        );
      }
    }
  );

// =========================
// UPDATE USER
// =========================
export const updateUser =
  createAsyncThunk(
    "users/updateUser",
    async (
      {
        id,
        payload,
      },
      thunkAPI
    ) => {
      try {
        const response =
          await updateUserApi(
            id,
            payload
          );

        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data
            ?.message ||
            "Failed to update user"
        );
      }
    }
  );

// =========================
// DELETE USER
// =========================
export const removeUser =
  createAsyncThunk(
    "users/deleteUser",
    async (
      id,
      thunkAPI
    ) => {
      try {
        await deleteUserApi(
          id
        );

        return id;
      } catch (error) {
        return thunkAPI.rejectWithValue(
          error.response?.data
            ?.message ||
            "Failed to delete user"
        );
      }
    }
  );
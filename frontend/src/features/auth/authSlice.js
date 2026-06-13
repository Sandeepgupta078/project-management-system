import { createSlice } from "@reduxjs/toolkit";

import {
  loginUser,
  loadProfile,
} from "./authThunks";

import { storage } from "../../utils/storage";

const initialState = {
  loading: false,
  user: storage.getUser(),
  token: storage.getToken(),
  error: null,
};

const authSlice =
  createSlice({
    name: "auth",

    initialState,

    reducers: {
      logout: (state) => {
        state.user = null;
        state.token = null;
        state.error = null;

        storage.clear();
      },
    },

    extraReducers: (
      builder
    ) => {
      builder

        .addCase(
          loginUser.pending,
          (state) => {
            state.loading = true;
            state.error = null;
          }
        )

        .addCase(
          loginUser.fulfilled,
          (
            state,
            action
          ) => {
            state.loading =
              false;

            state.user =
              action.payload.user;

            state.token =
              action.payload.token;
          }
        )

        .addCase(
          loginUser.rejected,
          (
            state,
            action
          ) => {
            state.loading =
              false;

            state.error =
              action.payload;
          }
        )

        .addCase(
          loadProfile.fulfilled,
          (
            state,
            action
          ) => {
            state.user =
              action.payload;
          }
        );
    },
  });

export const { logout } =
  authSlice.actions;

export default authSlice.reducer;
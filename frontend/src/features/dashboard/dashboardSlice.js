import { createSlice } from "@reduxjs/toolkit";
import { fetchDashboard } from "./dashboardThunks";

const initialState = {
  loading: false,
  analytics: null,
  error: null,
};

const dashboardSlice =
  createSlice({
    name: "dashboard",

    initialState,

    reducers: {},

    extraReducers: (
      builder
    ) => {
      builder
        .addCase(
          fetchDashboard.pending,
          (state) => {
            state.loading = true;
          }
        )

        .addCase(
          fetchDashboard.fulfilled,
          (
            state,
            action
          ) => {
            state.loading =
              false;
            state.analytics =
              action.payload;
            state.error = null;
          }
        )

        .addCase(
          fetchDashboard.rejected,
          (
            state,
            action
          ) => {
            state.loading =
              false;
            state.error =
              action.payload;
          }
        );
    },
  });

export default dashboardSlice.reducer;
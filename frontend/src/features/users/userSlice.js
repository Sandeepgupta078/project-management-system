import { createSlice } from "@reduxjs/toolkit";

import {
  fetchUsers,
  createUser,
  updateUser,
  removeUser,
} from "./userThunks";

const initialState = {
  loading: false,
  users: [],
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  },
  error: null,
};

const userSlice = createSlice({
  name: "users",

  initialState,

  reducers: {
    clearUserError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // =====================
      // Fetch Users
      // =====================
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;

        // Backend Response:
        // {
        //   success: true,
        //   data: {
        //     users: [],
        //     pagination: {}
        //   }
        // }

        state.users =
          action.payload?.data?.users || [];

        state.pagination =
          action.payload?.data?.pagination || {
            page: 1,
            limit: 10,
            total: 0,
            totalPages: 1,
          };

        state.error = null;
      })

      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ||
          "Failed to fetch users";
      })

      // =====================
      // Create User
      // =====================
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;

        // Backend Response:
        // {
        //   success: true,
        //   data: { _id, name, email, role }
        // }

        if (action.payload?.data) {
          state.users.unshift(
            action.payload.data
          );

          state.pagination.total += 1;
        }

        state.error = null;
      })

      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ||
          "Failed to create user";
      })

      // =====================
      // Update User
      // =====================
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;

        const updatedUser =
          action.payload?.data;

        if (updatedUser) {
          const index =
            state.users.findIndex(
              (user) =>
                user._id ===
                updatedUser._id
            );

          if (index !== -1) {
            state.users[index] =
              updatedUser;
          }
        }

        state.error = null;
      })

      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ||
          "Failed to update user";
      })

      // =====================
      // Delete User
      // =====================
      .addCase(removeUser.pending, (state) => {
        state.loading = true;
      })

      .addCase(removeUser.fulfilled, (state, action) => {
        state.loading = false;

        state.users =
          state.users.filter(
            (user) =>
              user._id !==
              action.payload
          );

        state.pagination.total =
          Math.max(
            0,
            state.pagination.total - 1
          );

        state.error = null;
      })

      .addCase(removeUser.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload ||
          "Failed to delete user";
      });
  },
});

export const {
  clearUserError,
} = userSlice.actions;

export default userSlice.reducer;
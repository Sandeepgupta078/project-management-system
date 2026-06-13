import { createSlice } from "@reduxjs/toolkit";

import {
  fetchProjects,
  fetchProjectById,
  createProject,
  updateProject,
  updateProjectStatus,
  removeProject,
} from "./projectThunks";

const initialState = {
  loading: false,
  projects: [],
  selectedProject: null,
  pagination: {
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  },
  error: null,
};

const projectSlice =
  createSlice({
    name: "projects",

    initialState,

    reducers: {
      clearProjectError: (
        state
      ) => {
        state.error =
          null;
      },

      clearSelectedProject:
        (state) => {
          state.selectedProject =
            null;
        },
    },

    extraReducers: (
      builder
    ) => {
      builder

        // ==========================
        // FETCH PROJECTS
        // ==========================
        .addCase(
          fetchProjects.pending,
          (state) => {
            state.loading =
              true;
            state.error =
              null;
          }
        )

        .addCase(
          fetchProjects.fulfilled,
          (
            state,
            action
          ) => {
            state.loading =
              false;

            state.projects =
              action.payload
                ?.data
                ?.projects ||
              [];

            state.pagination =
              action.payload
                ?.data
                ?.pagination || {
                page: 1,
                limit: 10,
                total: 0,
                totalPages: 1,
              };

            state.error =
              null;
          }
        )

        .addCase(
          fetchProjects.rejected,
          (
            state,
            action
          ) => {
            state.loading =
              false;
            state.error =
              action.payload ||
              "Failed to fetch projects";
          }
        )

        // ==========================
        // FETCH PROJECT BY ID
        // ==========================
        .addCase(
          fetchProjectById.pending,
          (state) => {
            state.loading =
              true;
          }
        )

        .addCase(
          fetchProjectById.fulfilled,
          (
            state,
            action
          ) => {
            state.loading =
              false;

            state.selectedProject =
              action.payload
                ?.data ||
              null;

            state.error =
              null;
          }
        )

        .addCase(
          fetchProjectById.rejected,
          (
            state,
            action
          ) => {
            state.loading =
              false;
            state.error =
              action.payload ||
              "Failed to load project";
          }
        )

        // ==========================
        // CREATE PROJECT
        // ==========================
        .addCase(
          createProject.pending,
          (state) => {
            state.loading =
              true;
          }
        )

        .addCase(
          createProject.fulfilled,
          (
            state,
            action
          ) => {
            state.loading =
              false;

            if (
              action.payload
                ?.data
            ) {
              state.projects.unshift(
                action.payload
                  .data
              );

              state.pagination.total +=
                1;
            }

            state.error =
              null;
          }
        )

        .addCase(
          createProject.rejected,
          (
            state,
            action
          ) => {
            state.loading =
              false;
            state.error =
              action.payload ||
              "Failed to create project";
          }
        )

        // ==========================
        // UPDATE PROJECT
        // ==========================
        .addCase(
          updateProject.pending,
          (state) => {
            state.loading =
              true;
          }
        )

        .addCase(
          updateProject.fulfilled,
          (
            state,
            action
          ) => {
            state.loading =
              false;

            const updatedProject =
              action.payload
                ?.data;

            if (
              updatedProject
            ) {
              const index =
                state.projects.findIndex(
                  (
                    project
                  ) =>
                    project._id ===
                    updatedProject._id
                );

              if (
                index !==
                -1
              ) {
                state.projects[
                  index
                ] =
                  updatedProject;
              }

              if (
                state
                  .selectedProject
                  ?._id ===
                updatedProject._id
              ) {
                state.selectedProject =
                  updatedProject;
              }
            }

            state.error =
              null;
          }
        )

        .addCase(
          updateProject.rejected,
          (
            state,
            action
          ) => {
            state.loading =
              false;
            state.error =
              action.payload ||
              "Failed to update project";
          }
        )

        // ==========================
        // UPDATE PROJECT STATUS
        // ==========================
        .addCase(
          updateProjectStatus.pending,
          (state) => {
            state.loading =
              true;
          }
        )

        .addCase(
          updateProjectStatus.fulfilled,
          (
            state,
            action
          ) => {
            state.loading =
              false;

            const updatedProject =
              action.payload
                ?.data;

            if (
              updatedProject
            ) {
              const index =
                state.projects.findIndex(
                  (
                    project
                  ) =>
                    project._id ===
                    updatedProject._id
                );

              if (
                index !==
                -1
              ) {
                state.projects[
                  index
                ] =
                  updatedProject;
              }

              state.selectedProject =
                updatedProject;
            }

            state.error =
              null;
          }
        )

        .addCase(
          updateProjectStatus.rejected,
          (
            state,
            action
          ) => {
            state.loading =
              false;
            state.error =
              action.payload ||
              "Failed to update project status";
          }
        )

        // ==========================
        // DELETE PROJECT
        // ==========================
        .addCase(
          removeProject.pending,
          (state) => {
            state.loading =
              true;
          }
        )

        .addCase(
          removeProject.fulfilled,
          (
            state,
            action
          ) => {
            state.loading =
              false;

            state.projects =
              state.projects.filter(
                (
                  project
                ) =>
                  project._id !==
                  action.payload
              );

            if (
              state
                .selectedProject
                ?._id ===
              action.payload
            ) {
              state.selectedProject =
                null;
            }

            state.pagination.total =
              Math.max(
                0,
                state
                  .pagination
                  .total - 1
              );

            state.error =
              null;
          }
        )

        .addCase(
          removeProject.rejected,
          (
            state,
            action
          ) => {
            state.loading =
              false;
            state.error =
              action.payload ||
              "Failed to delete project";
          }
        );
    },
  });

export const {
  clearProjectError,
  clearSelectedProject,
} = projectSlice.actions;

export default projectSlice.reducer;
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getProjectsApi,
  getProjectByIdApi,
  createProjectApi,
  updateProjectApi,
  updateProjectStatusApi,
  deleteProjectApi,
} from "../../api/projectApi";

// ==============================
// GET ALL PROJECTS
// ==============================
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (params, thunkAPI) => {
    try {
      const response = await getProjectsApi(params);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Unable to fetch projects",
      );
    }
  },
);

// ==============================
// GET PROJECT BY ID
// ==============================
export const fetchProjectById = createAsyncThunk(
  "projects/fetchProjectById",
  async (id, thunkAPI) => {
    try {
      const response = await getProjectByIdApi(id);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to load project",
      );
    }
  },
);

// ==============================
// CREATE PROJECT
// ==============================
export const createProject = createAsyncThunk(
  "projects/createProject",
  async (formData, thunkAPI) => {
    try {
      const response = await createProjectApi(formData);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Unable to create project",
      );
    }
  },
);

// ==============================
// UPDATE PROJECT
// ==============================
export const updateProject = createAsyncThunk(
  "projects/updateProject",
  async ({ id, payload }, thunkAPI) => {
    try {
      const response = await updateProjectApi(id, payload);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Unable to update project",
      );
    }
  },
);

// ==============================
// UPDATE PROJECT STATUS
// ==============================
export const updateProjectStatus = createAsyncThunk(
  "projects/updateProjectStatus",
  async ({ id, payload }, thunkAPI) => {
    try {
      const response = await updateProjectStatusApi(id, payload);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Unable to update project status",
      );
    }
  },
);

// ==============================
// DELETE PROJECT
// ==============================
export const removeProject = createAsyncThunk(
  "projects/deleteProject",
  async (id, thunkAPI) => {
    try {
      await deleteProjectApi(id);

      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Unable to delete project",
      );
    }
  },
);

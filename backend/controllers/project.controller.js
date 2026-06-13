import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

import {
  createProjectService,
  getProjectsService,
  getProjectByIdService,
  updateProjectService,
  deleteProjectService,
  updateStatusService,
} from "../services/project.service.js";

export const createProject =
  asyncHandler(async (req, res) => {
    const attachments =
      req.files?.map(
        (file) => file.filename
      ) || [];

    const project =
      await createProjectService({
        ...req.body,
        assignedUsers:
          req.body.assignedUsers
            ? JSON.parse(
                req.body.assignedUsers
              )
            : [],
        attachments,
        createdBy: req.user._id,
      });

    res.status(201).json(
      new ApiResponse(
        201,
        "Project created successfully",
        project
      )
    );
  });

export const getProjects =
  asyncHandler(async (req, res) => {
    const projects =
      await getProjectsService(
        req.user,
        req.query
      );

    res.status(200).json(
      new ApiResponse(
        200,
        "Projects fetched successfully",
        projects
      )
    );
  });

export const getProject =
  asyncHandler(async (req, res) => {
    const project =
      await getProjectByIdService(
        req.params.id
      );

    res.status(200).json(
      new ApiResponse(
        200,
        "Project fetched successfully",
        project
      )
    );
  });

export const updateProject =
  asyncHandler(async (req, res) => {
    const project =
      await updateProjectService(
        req.params.id,
        req.body
      );

    res.status(200).json(
      new ApiResponse(
        200,
        "Project updated successfully",
        project
      )
    );
  });

export const deleteProject =
  asyncHandler(async (req, res) => {
    await deleteProjectService(
      req.params.id
    );

    res.status(200).json(
      new ApiResponse(
        200,
        "Project deleted successfully"
      )
    );
  });

export const updateStatus =
  asyncHandler(async (req, res) => {
    const project =
      await updateStatusService(
        req.params.id,
        req.user._id,
        req.body.status
      );

    res.status(200).json(
      new ApiResponse(
        200,
        "Status updated successfully",
        project
      )
    );
  });
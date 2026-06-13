import Project from "../models/Project.js";
import ApiError from "../utils/ApiError.js";

export const createProjectService = async (
  payload
) => {
  return await Project.create(payload);
};

export const getProjectsService = async (
  user,
  query
) => {
  const page = Number(query.page) || 1;
  const limit =
    Number(query.limit) || 10;
  const search = query.search || "";

  let filter = {};

  if (search) {
    filter.$text = {
      $search: search,
    };
  }

  if (user.role === "User") {
    filter.assignedUsers = user._id;
  }

  const skip = (page - 1) * limit;

  const projects =
    await Project.find(filter)
      .populate(
        "assignedUsers",
        "name email role"
      )
      .populate(
        "createdBy",
        "name email"
      )
      .sort({
        createdAt: -1,
      })
      .skip(skip)
      .limit(limit);

  const total =
    await Project.countDocuments(
      filter
    );

  return {
    projects,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(
        total / limit
      ),
    },
  };
};

export const getProjectByIdService =
  async (id) => {
    const project =
      await Project.findById(id)
        .populate(
          "assignedUsers",
          "name email role"
        )
        .populate(
          "createdBy",
          "name email"
        );

    if (!project) {
      throw new ApiError(
        404,
        "Project not found"
      );
    }

    return project;
  };

export const updateProjectService =
  async (id, payload) => {
    const project =
      await Project.findByIdAndUpdate(
        id,
        payload,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!project) {
      throw new ApiError(
        404,
        "Project not found"
      );
    }

    return project;
  };

export const deleteProjectService =
  async (id) => {
    const project =
      await Project.findById(id);

    if (!project) {
      throw new ApiError(
        404,
        "Project not found"
      );
    }

    await project.deleteOne();
  };

export const updateStatusService =
  async (
    projectId,
    userId,
    status
  ) => {
    const project =
      await Project.findById(
        projectId
      );

    if (!project) {
      throw new ApiError(
        404,
        "Project not found"
      );
    }

    const assigned =
      project.assignedUsers.some(
        (id) =>
          id.toString() ===
          userId.toString()
      );

    if (!assigned) {
      throw new ApiError(
        403,
        "You are not assigned to this project"
      );
    }

    project.status = status;

    await project.save();

    return project;
  };
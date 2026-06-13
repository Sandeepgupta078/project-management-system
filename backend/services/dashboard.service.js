import User from "../models/User.js";
import Project from "../models/Project.js";

export const getDashboardAnalytics = async () => {
  // Total Users
  const totalUsers = await User.countDocuments();

  // Total Projects
  const totalProjects = await Project.countDocuments();

  // Project Status Count
  const statusData = await Project.aggregate([
    {
      $group: {
        _id: "$status",
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  const projectStatus = {
    Pending: 0,
    "In-Progress": 0,
    Completed: 0,
  };

  statusData.forEach((item) => {
    projectStatus[item._id] = item.count;
  });

  // Projects Ending Within Next 7 Days
  const today = new Date();

  const next7Days = new Date();
  next7Days.setDate(today.getDate() + 7);

  const endingSoonProjects =
    await Project.find({
      endDate: {
        $gte: today,
        $lte: next7Days,
      },
    })
      .select(
        "title status endDate assignedUsers"
      )
      .populate(
        "assignedUsers",
        "name email"
      );

  // Latest Projects (Bonus)
  const latestProjects =
    await Project.find()
      .sort({
        createdAt: -1,
      })
      .limit(5)
      .populate(
        "createdBy",
        "name"
      );

  return {
    totalUsers,
    totalProjects,
    projectStatus,
    endingSoonProjects,
    latestProjects,
  };
};
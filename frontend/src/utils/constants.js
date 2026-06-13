import { LayoutDashboard, FolderKanban, Users, User } from "lucide-react";

export const USER_ROLES = {
  ADMIN: "Admin",
  USER: "User",
};

export const PROJECT_STATUS = {
  PENDING: "Pending",
  IN_PROGRESS: "In-Progress",
  COMPLETED: "Completed",
};

export const ADMIN_MENU = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Users",
    path: "/users",
    icon: Users,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
];

export const USER_MENU = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: User,
  },
];

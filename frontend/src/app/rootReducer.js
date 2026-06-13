import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import userReducer from "../features/users/userSlice";
import projectReducer from "../features/projects/projectSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  users: userReducer,
  projects: projectReducer,
});

export default rootReducer;

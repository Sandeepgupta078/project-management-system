import api from "./axios";

export const getDashboardApi = async () => {
  const response = await api.get("/dashboard/analytics");

  return response.data;
};

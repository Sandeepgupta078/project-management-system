import api from "./axios";

export const loginApi = async (payload) => {
  const response = await api.post("/auth/login", payload);

  return response.data;
};

export const getProfileApi = async () => {
  const response = await api.get("/auth/me");

  return response.data;
};

export const createUserApi = async (payload) => {
  const response = await api.post("/auth/register", payload);

  return response.data;
};

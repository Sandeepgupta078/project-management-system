import api from "./axios";

export const getUsersApi = async (params) => {
  const response = await api.get("/users", {
    params,
  });

  return response.data;
};

export const getUserApi = async (id) => {
  const response = await api.get(`/users/${id}`);

  return response.data;
};

export const createUserApi = async (payload) => {
  const response = await api.post("/auth/register", payload);

  return response.data;
};

export const updateUserApi = async (id, payload) => {
  const response = await api.put(`/users/${id}`, payload);

  return response.data;
};

export const changeRoleApi = async (id, role) => {
  const response = await api.patch(`/users/${id}/role`, {
    role,
  });

  return response.data;
};

export const deleteUserApi = async (id) => {
  const response = await api.delete(`/users/${id}`);

  return response.data;
};

export const getUsersForSelectApi = async () => {
  const response = await api.get("/users", {
    params: {
      page: 1,
      limit: 100,
    },
  });

  return response.data;
};

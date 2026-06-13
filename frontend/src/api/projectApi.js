import api from "./axios";

export const getProjectsApi = async (params = {}) => {
  const response = await api.get("/projects", {
    params,
  });

  return response.data;
};

export const getProjectByIdApi = async (id) => {
  const response = await api.get(`/projects/${id}`);

  return response.data;
};

export const createProjectApi = async (formData) => {
  const response = await api.post("/projects", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const updateProjectApi = async (id, payload) => {
  const response = await api.put(`/projects/${id}`, payload);

  return response.data;
};

export const updateProjectStatusApi = async (id, payload) => {
  const response = await api.patch(`/projects/${id}/status`, payload);

  return response.data;
};

export const deleteProjectApi = async (id) => {
  const response = await api.delete(`/projects/${id}`);

  return response.data;
};

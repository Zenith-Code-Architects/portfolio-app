import { apiClient } from "./config";

export const apiAddBio = async (payload) => {
  return apiClient.post("/userBio", payload);
};

export const apiGetBio = async () => {
  return apiClient.get("/userBio");
};

export const apiUpdateBio = async (id, payload) => {
  return apiClient.patch(`/userBio/${id}`, payload);
};
import { apiClient } from "./config"

export const apiAddProfile = async (payload) => {
    return apiClient.post("/profile", payload)
};

export const apiGetProfile = async () => {
    return apiClient.get("/profile")
};

export const apiUpdateProfile = async (id, payload) => {
    return apiClient.patch (`/profile/${id}`, payload);
}
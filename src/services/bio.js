import { apiClient } from "./config"

export const apiGetBio = async () => {
    return apiClient.get("/bio")
};

export const apiAddBio = async (payload) => {
    return apiClient.post("/bio", payload)
};

export const apiGetBioById = async (id) => {
    return apiClient.get(`/bio/ ${id}`)
};

export const apiUpdateBio = async (id) => {
    return apiClient.patch(`/bio/ ${id}`)
};

export const apiDeleteBio = async (id) => {
    return apiClient.delete(`/bio/ ${id}`)
};
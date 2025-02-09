import { apiClient } from "./config"

export const apiGetEducations = async () => {
    return apiClient.get("/educations")
};

export const apiAddEducation = async (payload) => {
    return apiClient.post("/educations", payload)
};

export const apiGetEducationById = async (id) => {
    return apiClient.get(`/educations/ ${id}`)
};

export const apiUpdateEducation = async (id, payload) => {
    return apiClient.patch(`/educations/ ${id}`, payload)
};

export const apiDeleteEducation = async (id) => {
    return apiClient.delete(`/educations/ ${id}`)
};
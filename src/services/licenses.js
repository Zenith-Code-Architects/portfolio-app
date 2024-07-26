import { apiClient } from "./config"

export const apiGetLicenses = async () => {
    return apiClient.get("/licenses")
};

export const apiAddLicense = async (payload) => {
    return apiClient.post("/licenses", payload)
};

export const apiGetLicenseById = async (id) => {
    return apiClient.get(`/licenses/ ${id}`)
};

export const apiUpdateLicense = async (id, payload) => {
    return apiClient.patch(`/licenses/ ${id}`, payload)
};

export const apiDeleteLicense = async (id) => {
    return apiClient.delete(`/licenses/ ${id}`)
};
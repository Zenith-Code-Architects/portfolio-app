import { apiClient } from "./config"

export const apiGetLicenses = async () => {
    return apiClient.get("/licenses")
};

export const apiAddLicense = async (payload) => {
    return apiClient.post("/licenses", payload)
};

export const apiGetapiAddLicenseById = async (id) => {
    return apiClient.get(`/licenses/ ${id}`)
};

export const apiUpdateLicense = async (id) => {
    return apiClient.patch(`/licenses/ ${id}`)
};

export const apiDeleteLicense = async (id) => {
    return apiClient.delete(`/licenses/ ${id}`)
};
import { apiClient } from "./config"

export const apiGetLicenses = async () => {
    return apiClient.get("/licenses")
};
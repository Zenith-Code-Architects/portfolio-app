import { apiClient } from "./config"

export const apiSignUp = async(payload) => {
    return apiClient.post("/auth/signup", payload)
}

export const apiLogin = async(payload) => {
    return apiClient.post("/auth/login", payload)
}

export const apiucheckUsernameExists = async(userName) => {
    return apUserClient.get(`/auth/${userName}`)
}

import { apiClient } from "./config"

export const apiGetProjects = async () => {
    return apiClient.get("/projects")
};

export const apiAddProject = async (payload) => {
    return apiClient.post("/projects", payload)
};

export const apiGetProjectById = async (id) => {
    return apiClient.get(`/projects/ ${id}`)
};

export const apiUpdateProject = async (id) => {
    return apiClient.patch(`/projects/ ${id}`)
};    

export const apiDeleteProjects = async (id) => {
    return apiClient.delete(`/projects/ ${id}`)
};
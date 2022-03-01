import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:81",

    withCredentials: true,
});

export default apiClient;
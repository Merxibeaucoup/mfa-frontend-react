import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8081/api/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

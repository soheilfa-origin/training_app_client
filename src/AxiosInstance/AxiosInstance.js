import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: "https://traning-app-server.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

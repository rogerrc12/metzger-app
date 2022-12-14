import axios from "axios";
import setAxiosInterceptors from "./interceptors";

const axiosInstance = axios.create({
  baseURL: "https://system-tracking.devtch.com/api",
  timeout: 30000,
});

setAxiosInterceptors(axiosInstance);

export default axiosInstance;

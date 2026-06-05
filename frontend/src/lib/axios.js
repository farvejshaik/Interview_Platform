import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  console.log(`[AXIOS] ${config.method?.toUpperCase()} ${config.url}`, config);
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    console.log(`[AXIOS] ${res.status} ${res.config.url}`, res);
    return res;
  },
  (error) => {
    console.error(`[AXIOS] ERROR ${error.config?.url}:`, {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
    return Promise.reject(error);
  },
);

export default axiosInstance;

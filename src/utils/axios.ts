import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { ENV } from "../configs/constants/env";
import { getToken } from "./token";

interface SignedAxiosRequestConfig extends InternalAxiosRequestConfig {
  signed?: boolean;
}

const api = axios.create({
  baseURL: ENV.apiUrl,
  timeout: 15000,
});

api.interceptors.request.use(
  (config: SignedAxiosRequestConfig) => {
    const token = getToken();

    // Jika config memerlukan signature/auth (default true atau cek config.signed)
    if (!token) {
      window.location.href = "/login";
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

export default api;

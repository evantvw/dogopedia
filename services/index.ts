import axios from "axios";
import environment from "@/configs/environment";

const services = axios.create({
  baseURL: environment.BASE_URL,
  timeout: 30 * 1000,
  timeoutErrorMessage: "Koneksi gagal, mohon cek koneksi internet!",
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor
services.interceptors.request.use(async (config) => {
  const privateKey = process.env.PRIVATE_KEY;
  config.headers["x-api-key"] = privateKey;
  return config;
});

// response interceptor
services.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error => ", error);
    console.log("response => ", error.response?.data);
    if (error.code === "ECONNABORTED") {
      return Promise.reject(new Error(error.message));
    }
    if (error.response?.status === 401) {
      return Promise.reject(
        new Error("Session telah kadaluarsa, silahkan login kembali"),
      );
    }
    return Promise.reject(error.response.data);
  },
);

export default services;

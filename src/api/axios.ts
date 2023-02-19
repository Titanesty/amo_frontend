import axios from "axios";
import type { AxiosInstance } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const defaultOptions = {
  baseURL: BASE_URL,
};

export const createAxiosInstance = (options = defaultOptions): AxiosInstance => {
  return axios.create(options);
};

const axiosBase = createAxiosInstance();

export default axiosBase;

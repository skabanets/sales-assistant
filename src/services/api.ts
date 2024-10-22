import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
});

export const setToken = (token: string): void => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = (): void => {
  api.defaults.headers.common.Authorization = ``;
};

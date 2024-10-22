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

export const saveTokens = (accessToken: string, refreshToken: string): void => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const refreshAccessToken = async (refreshToken: string): Promise<string> => {
  const {
    data: {
      data: { access },
    },
  } = await api.put("/auth/token/refresh", { refreshToken });

  saveTokens(access.accessToken, access.refreshToken);
  setToken(access.accessToken);

  return access.accessToken;
};

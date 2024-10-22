import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { api, refreshAccessToken, saveTokens, setToken } from "../../services";
import { IAccountDTO } from "../../interfaces-submodule/interfaces/dto/account/iaccount.interface";
import { ILoginRequestDTO } from "../../interfaces-submodule/interfaces/dto/auth/iadmin-login-request.interface";

export const login = createAsyncThunk<IAccountDTO, ILoginRequestDTO, { rejectValue: string }>(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const {
        data: {
          data: { access, account },
        },
      } = await api.post("/auth/login", credentials);

      saveTokens(access.accessToken, access.refreshToken);

      return account;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "An unknown error occurred");
    }
  }
);

export const recoverUser = createAsyncThunk<IAccountDTO, undefined, { rejectValue: string }>(
  "auth/recoverUser",
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: {
          data: { account },
        },
      } = await api.get("/auth/recover-user");

      return account;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "An unknown error occurred");
    }
  }
);

export const refresh = createAsyncThunk<IAccountDTO, undefined, { rejectValue: string }>(
  "auth/refresh",
  async (_, { dispatch, rejectWithValue }) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken || !refreshToken) {
      return rejectWithValue("Access token or refresh token not found");
    }

    setToken(accessToken);

    try {
      return await dispatch(recoverUser()).unwrap();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401 || error.response?.status === 403) {
          try {
            await refreshAccessToken(refreshToken);
            return await dispatch(recoverUser()).unwrap();
          } catch (innerError) {
            return rejectWithValue("Failed to refresh token");
          }
        }
        return rejectWithValue(error.message || "Unknown error occurred");
      }
      return rejectWithValue("Unknown error occurred");
    }
  }
);

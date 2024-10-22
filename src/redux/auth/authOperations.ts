import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../services";
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

      localStorage.setItem("accessToken", access.accessToken);
      localStorage.setItem("refreshToken", access.refreshToken);

      return account;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("An unknown error occurred");
      }
    }
  }
);

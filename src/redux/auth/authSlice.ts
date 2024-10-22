import { createSlice } from "@reduxjs/toolkit";
import { IAccountDTO } from "../../interfaces-submodule/interfaces/dto/account/iaccount.interface";
import { login } from "./authOperations";

interface IAuthSlice {
  userInfo: IAccountDTO | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
}

const initialState: IAuthSlice = {
  userInfo: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.userInfo = payload;
      state.isLoggedIn = true;
    });
  },
  selectors: {
    selectUserInfo: state => state.userInfo,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsLoadingAuth: state => state.isLoading,
    selectIsRefreshing: state => state.isRefreshing,
    selectAuthError: state => state.error,
  },
});

export const authReducer = authSlice.reducer;
export const {
  selectUserInfo,
  selectIsLoggedIn,
  selectIsLoadingAuth,
  selectIsRefreshing,
  selectAuthError,
} = authSlice.selectors;

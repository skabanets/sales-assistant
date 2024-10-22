import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { IAccountDTO } from "../../interfaces-submodule/interfaces/dto/account/iaccount.interface";
import { login, recoverUser, refresh } from "./authOperations";

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
    builder
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(refresh.fulfilled, state => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refresh.rejected, () => {
        return initialState;
      })
      .addMatcher(isAnyOf(login.pending, recoverUser.pending), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(isAnyOf(login.fulfilled, recoverUser.fulfilled), (state, { payload }) => {
        state.userInfo = payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(login.rejected, recoverUser.rejected), (state, { payload }) => {
        state.isLoading = false;
        state.error = payload ?? "Login failed";
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

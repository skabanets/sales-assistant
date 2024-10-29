import { createSlice } from "@reduxjs/toolkit";

import { IAccountDTO } from "../../interfaces-submodule/interfaces/dto/account/iaccount.interface";
import { clearSavedTokens } from "../../services";

interface IAuthSlice {
  userInfo: IAccountDTO | null;
  isLoggedIn: boolean;
}

const initialState: IAuthSlice = {
  userInfo: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    },
    logout: () => {
      clearSavedTokens();
      return initialState;
    },
  },
  selectors: {
    selectUserInfo: state => state.userInfo,
    selectIsLoggedIn: state => state.isLoggedIn,
  },
});

export const authReducer = authSlice.reducer;
export const { setUserInfo, logout } = authSlice.actions;
export const { selectUserInfo, selectIsLoggedIn } = authSlice.selectors;

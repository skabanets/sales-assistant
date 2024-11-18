import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth/authSlice";
import { authApi, chatsApi, upworkFeedsApi } from "../services";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [upworkFeedsApi.reducerPath]: upworkFeedsApi.reducer,
    [chatsApi.reducerPath]: chatsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(upworkFeedsApi.middleware)
      .concat(chatsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

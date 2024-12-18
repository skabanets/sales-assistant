import { configureStore } from "@reduxjs/toolkit";

import { authReducer, chatReducer, filterReducer } from "../redux";
import { authApi, chatsApi, messagesApi, upworkFeedsApi } from "../services";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chats: chatReducer,
    filter: filterReducer,
    [authApi.reducerPath]: authApi.reducer,
    [upworkFeedsApi.reducerPath]: upworkFeedsApi.reducer,
    [chatsApi.reducerPath]: chatsApi.reducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(upworkFeedsApi.middleware)
      .concat(chatsApi.middleware)
      .concat(messagesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

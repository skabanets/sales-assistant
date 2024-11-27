import { createSlice } from "@reduxjs/toolkit";

import { chatsApi } from "../../services";
import { IChatItem } from "../../interfaces-submodule/interfaces/dto/chat/dto/ichat-item";

interface ChatState {
  chats: IChatItem[];
}

const initialState: ChatState = {
  chats: [],
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(chatsApi.endpoints.fetchChats.matchFulfilled, (state, { payload }) => {
        state.chats = payload;
      })
      .addMatcher(chatsApi.endpoints.createChat.matchFulfilled, (state, { payload }) => {
        state.chats.unshift(payload);
      })
      .addMatcher(chatsApi.endpoints.deleteChat.matchFulfilled, (state, { meta }) => {
        const chatId = meta.arg.originalArgs.id;
        state.chats = state.chats.filter(chat => chat.id !== chatId);
      })
      .addMatcher(chatsApi.endpoints.editChat.matchFulfilled, (state, { payload }) => {
        const index = state.chats.findIndex(chat => chat.id === payload.id);

        if (index !== -1) {
          state.chats[index] = { ...state.chats[index], ...payload };
        }
      });
  },
  selectors: {
    selectChats: state => state.chats,
  },
});

export const chatReducer = chatSlice.reducer;
export const { selectChats } = chatSlice.selectors;

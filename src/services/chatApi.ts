import { createApi } from "@reduxjs/toolkit/query/react";

import { authenticatedBaseQuery } from "../services";
import { IChatItem } from "../interfaces-submodule/interfaces/dto/chat/dto/ichat-item";
import { IEditChatRequest } from "../interfaces-submodule/interfaces/dto/chat/dto/iedit-chat-request.interface";

export const chatsApi = createApi({
  reducerPath: "chatsApi",
  baseQuery: authenticatedBaseQuery,
  endpoints: builder => ({
    fetchChats: builder.query<IChatItem[], void>({
      query: () => "/chats",
      transformResponse: (response: { data: IChatItem[] }) => response.data,
    }),
    editChat: builder.mutation<IChatItem, { id: number; data: IEditChatRequest }>({
      query: ({ id, data }) => ({
        url: `/chats/${id}`,
        method: "PUT",
        body: data,
        transformResponse: (response: { data: IChatItem }) => response.data,
      }),
    }),
    deleteChat: builder.mutation<boolean, { id: number }>({
      query: ({ id }) => ({
        url: `/chats/${id}`,
        method: "DELETE",
      }),
      transformResponse: (response: { data: boolean }) => response.data,
    }),
  }),
});

export const { useFetchChatsQuery, useEditChatMutation, useDeleteChatMutation } = chatsApi;

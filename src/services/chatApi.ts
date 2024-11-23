import { createApi } from "@reduxjs/toolkit/query/react";

import { authenticatedBaseQuery } from "../services";
import { IChatItem } from "../interfaces-submodule/interfaces/dto/chat/dto/ichat-item";
import { IEditChatRequest } from "../interfaces-submodule/interfaces/dto/chat/dto/iedit-chat-request.interface";
import { ICreateChatRequest } from "../interfaces-submodule/interfaces/dto/chat/dto/icreate-chat-request.interface";

export const chatsApi = createApi({
  reducerPath: "chatsApi",
  baseQuery: authenticatedBaseQuery,
  endpoints: builder => ({
    fetchChats: builder.query<IChatItem[], void>({
      query: () => "/chats",
      transformResponse: ({ data }: { data: IChatItem[] }) => data,
    }),
    createChat: builder.mutation<IChatItem, ICreateChatRequest>({
      query: name => ({
        url: "/chats",
        method: "POST",
        body: name,
      }),
      transformResponse: ({ data }: { data: IChatItem }) => data,
    }),
    editChat: builder.mutation<IChatItem, { id: number; data: IEditChatRequest }>({
      query: ({ id, data }) => ({
        url: `/chats/${id}`,
        method: "PUT",
        body: data,
      }),
      transformResponse: ({ data }: { data: IChatItem }) => data,
    }),
    deleteChat: builder.mutation<boolean, { id: number }>({
      query: ({ id }) => ({
        url: `/chats/${id}`,
        method: "DELETE",
      }),
      transformResponse: ({ data }: { data: boolean }) => data,
    }),
  }),
});

export const {
  useFetchChatsQuery,
  useCreateChatMutation,
  useEditChatMutation,
  useDeleteChatMutation,
} = chatsApi;

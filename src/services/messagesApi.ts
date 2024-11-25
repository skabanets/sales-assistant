import { createApi } from "@reduxjs/toolkit/query/react";

import { authenticatedBaseQuery } from "../services";
import { IMessageDTO } from "./../interfaces-submodule/interfaces/dto/message/imessage-dto";
import { ISendMessageRequest } from "../interfaces-submodule/interfaces/dto/message/isend-message-request.interface";

export const messagesApi = createApi({
  reducerPath: "messagesApi",
  baseQuery: authenticatedBaseQuery,
  endpoints: builder => ({
    fetchMessages: builder.query<IMessageDTO[], { id: number }>({
      query: ({ id }) => `/messages/${id}`,
      transformResponse: ({ data }: { data: IMessageDTO[] }) => data,
    }),
    sendMessage: builder.mutation<IMessageDTO, ISendMessageRequest>({
      query: data => ({
        url: "/messages/send-message",
        method: "POST",
        body: data,
      }),
      transformResponse: ({ data }: { data: IMessageDTO }) => data,
    }),
  }),
});

export const { useFetchMessagesQuery, useSendMessageMutation } = messagesApi;

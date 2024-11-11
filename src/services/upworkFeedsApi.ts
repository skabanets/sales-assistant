import { createApi } from "@reduxjs/toolkit/query/react";

import { authenticatedBaseQuery } from "../services";
import { IUpworkResponseListFeedsDto } from "../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-response-list-feeds.dto";
import { IGetAllUpworkFeedRequest } from "../interfaces-submodule/interfaces/dto/upwork-feed/iget-all-upwork-feed-request.interface";
import { IUpworkFeedDetailItemDTO } from "../interfaces-submodule/interfaces/dto/upwork-feed/iupwork-feed-detail-item.dto";
import { IUpdateUpworkFeedDto } from "../interfaces-submodule/interfaces/dto/upwork-feed/iupdate-upwork-feed.dto";

export const upworkFeedsApi = createApi({
  reducerPath: "upworkFeedsApi",
  baseQuery: authenticatedBaseQuery,
  endpoints: builder => ({
    fetchFeeds: builder.query<IUpworkResponseListFeedsDto, IGetAllUpworkFeedRequest>({
      query: credentials => ({
        url: "/upwork-feeds/get-feeds",
        method: "POST",
        body: credentials,
      }),
      transformResponse: ({ data }: { data: IUpworkResponseListFeedsDto }) => data,
    }),
    getFeedById: builder.query<IUpworkFeedDetailItemDTO, string>({
      query: (id: string) => `/upwork-feeds/${id}`,
      transformResponse: ({ data }: { data: IUpworkFeedDetailItemDTO }) => data,
    }),
    updateFeed: builder.mutation<
      IUpworkFeedDetailItemDTO,
      { id: string; credentials: IUpdateUpworkFeedDto }
    >({
      query: ({ id, credentials }) => ({
        url: `/upwork-feeds/${id}`,
        method: "PUT",
        body: credentials,
      }),
      transformResponse: ({ data }: { data: IUpworkFeedDetailItemDTO }) => data,
    }),
  }),
});

export const { useFetchFeedsQuery, useGetFeedByIdQuery, useUpdateFeedMutation } = upworkFeedsApi;

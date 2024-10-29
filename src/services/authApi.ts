import { createApi } from "@reduxjs/toolkit/query/react";

import { IAccountDTO } from "../interfaces-submodule/interfaces/dto/account/iaccount.interface";
import { ILoginRequestDTO } from "../interfaces-submodule/interfaces/dto/auth/iadmin-login-request.interface";
import { ILoginResponseDTO } from "../interfaces-submodule/interfaces/dto/auth/ilogin-response.interfaces";
import { authenticatedBaseQuery, saveTokens } from "../services";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: authenticatedBaseQuery,
  endpoints: builder => ({
    login: builder.mutation<IAccountDTO, ILoginRequestDTO>({
      query: credentials => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: { data: ILoginResponseDTO }) => {
        const accessToken = response.data.access.accessToken;
        const refreshToken = response.data.access.refreshToken;
        const userAccount = response.data.account;

        saveTokens(accessToken, refreshToken);
        return userAccount;
      },
    }),
    recoverUser: builder.query<IAccountDTO, void>({
      query: () => "/auth/recover-user",
      transformResponse: (response: { data: { account: IAccountDTO } }) => {
        return response.data.account;
      },
    }),
  }),
});

export const { useLoginMutation, useRecoverUserQuery } = authApi;

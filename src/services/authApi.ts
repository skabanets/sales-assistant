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
      transformResponse: ({ data }: { data: ILoginResponseDTO }) => {
        const {
          access: { accessToken, refreshToken },
          account,
        } = data;

        saveTokens(accessToken, refreshToken);
        return account;
      },
    }),
    recoverUser: builder.query<IAccountDTO, void>({
      query: () => "/auth/recover-user",
      transformResponse: ({ data }: { data: { account: IAccountDTO } }) => data.account,
    }),
  }),
});

export const { useLoginMutation, useRecoverUserQuery } = authApi;

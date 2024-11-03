import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";

import { IAccessDTO } from "../interfaces-submodule/interfaces/dto/auth/iaccess.interface";
import { logout } from "../redux";

interface IRefreshResponse {
  data: {
    access: IAccessDTO;
  };
}

export const saveTokens = (accessToken: string, refreshToken: string): void => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const clearSavedTokens = (): void => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};

const setAuthorizationHeader = (headers: Headers): void => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }
};

export const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_BASE_URL as string,
  prepareHeaders: headers => {
    setAuthorizationHeader(headers);
    return headers;
  },
});

export const authenticatedBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  let result = await baseQueryWithAuth(args, api, extraOptions);

  if (result.error && (result.error.status === 401 || result.error.status === 403)) {
    const refreshToken = localStorage.getItem("refreshToken");

    if (refreshToken) {
      const refreshResult = await baseQueryWithAuth(
        {
          url: "/auth/token/refresh",
          method: "PUT",
          body: { token: refreshToken },
        },
        api,
        extraOptions
      );

      if (refreshResult.error) {
        handleLogout(api);
        return refreshResult;
      }

      const responseData = refreshResult.data as IRefreshResponse;

      if (responseData.data) {
        const { accessToken, refreshToken } = responseData.data.access;
        saveTokens(accessToken, refreshToken);
        result = await baseQueryWithAuth(args, api, extraOptions);
      } else {
        handleLogout(api);
      }
    } else {
      handleLogout(api);
    }
  }

  return result;
};

const handleLogout = (api: any) => {
  api.dispatch(logout());
  clearSavedTokens();
};

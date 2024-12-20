import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "./BaseApiUrl";
const AUTH_URL = "auth";
export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryUrl,
  tagTypes: [],
  endpoints: (build) => ({
    //register mutation
    register: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    // verify email mutation
    verifyEmail: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/verify-email`,
        method: "POST",
        body: data,
      }),
    }),
    //login mutation
    login: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    //logout
    logout: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
        body: {},
      }),
    }),
  }),
});
export const { useRegisterMutation, useVerifyEmailMutation, useLoginMutation, useLogoutMutation } =
  authApiSlice;

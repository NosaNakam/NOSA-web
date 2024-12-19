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
    //login mutation
    //logout
  }),
});

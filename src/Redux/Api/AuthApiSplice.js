import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "./BaseApiUrl";
export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryUrl,
  tagTypes: [],
  endpoints: (build) => ({
    //register mutation
    // verify email mutation
    //login mutation
    //logout
  }),
});

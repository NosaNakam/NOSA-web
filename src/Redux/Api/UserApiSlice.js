import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "./BaseApiUrl";
const USER_URL = "users";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryUrl,
  tagTypes: [],
  endpoints: (build) => ({
    //get user profile
    getUserProfile: build.query({
      query: () => ({
        url: `${USER_URL}/profile`,
        method: "GET",
      }),
    }),
    //update user profile
    updateCurrentUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/updateCurrentUser`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});
export const { useGetUserProfileQuery, useUpdateCurrentUserMutation } = userApiSlice;

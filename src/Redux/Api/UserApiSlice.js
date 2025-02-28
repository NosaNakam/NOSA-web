import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "./BaseApiUrl";
const USER_URL = "users";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryUrl,
  tagTypes: ["User"],
  endpoints: (build) => ({
    //update user profile
    updateCurrentUser: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/updateCurrentUser`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    //update user profile
    uploadUserImage: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/uploadUserImage`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    uploadUserBanner: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/uploadUserBanner`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    getSingleUserDetails: build.query({
      query: (id) => ({
        url: `${USER_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});
export const {
  useUpdateCurrentUserMutation,
  useGetSingleUserDetailsQuery,
  useUploadUserImageMutation,
  useUploadUserBannerMutation,
} = userApiSlice;

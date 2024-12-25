import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "./BaseApiUrl";
const SET_POST_URL = "set-posts";

export const setPostApiSlice = createApi({
  reducerPath: "setPostApi",
  baseQuery: baseQueryUrl,
  tagTypes: ["Post"],
  endpoints: (build) => ({
    //get all set posts
    getAllSetPosts: build.query({
      query: (setId) => ({
        url: `${SET_POST_URL}?setId=${setId}`,
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    //get single post by id
    getSetPostById: build.query({
      query: (postId) => ({
        url: `${SET_POST_URL}/${postId}`,
        method: "GET",
      }),
    }),
    //create new set post
    createSetPost: build.mutation({
      query: (newPost) => ({
        url: `${SET_POST_URL}`,
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const { useGetAllSetPostsQuery, useGetSetPostByIdQuery, useCreateSetPostMutation } =
  setPostApiSlice;
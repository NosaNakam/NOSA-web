import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "./BaseApiUrl";
const EVENTS_URL = "events";
const NEWS_BLOG_URL = "news-and-blogs";

export const blogApiSlice = createApi({
  reducerPath: "blogsApi",
  baseQuery: baseQueryUrl,
  tagTypes: ["Blog"],
  endpoints: (build) => ({
    //get all events
    getAllEvents: build.query({
      query: () => ({
        url: `${EVENTS_URL}`,
        method: "GET",
      }),
    }),

    //get all news
    getAllNews: build.query({
      query: () => ({
        url: `${NEWS_BLOG_URL}/news`,
        method: "GET",
      }),
    }),
    //get all Blogs
    getAllBlogs: build.query({
      query: () => ({
        url: `${NEWS_BLOG_URL}/blogs`,
        method: "GET",
      }),
    }),
    getDetailPost: build.query({
      query: ({ id }) => ({
        url: `${NEWS_BLOG_URL}/${id}`,
      }),
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetAllNewsQuery,
  useGetAllBlogsQuery,
  useGetDetailPostQuery,
} = blogApiSlice;

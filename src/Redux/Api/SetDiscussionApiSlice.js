import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "./BaseApiUrl";
const SET_CHAT_URL = "set-discussions";

export const setDiscussionApiSlice = createApi({
  reducerPath: "setDiscussionApi",
  baseQuery: baseQueryUrl,
  tagTypes: ["Chat"],
  endpoints: (build) => ({
    //get all set chats
    getAllSetChats: build.query({
      query: (setId) => ({
        url: `${SET_CHAT_URL}?setId=${setId}`,
        method: "GET",
      }),
      providesTags: ["Chat"],
    }),
    //get single chat by id
    getSingleChatById: build.query({
      query: (messageId) => ({
        url: `${SET_CHAT_URL}/${messageId}`,
        method: "GET",
      }),
    }),
    //send message
    sendSetChat: build.mutation({
      query: (newMessage) => ({
        url: `${SET_CHAT_URL}`,
        method: "POST",
        body: newMessage,
      }),
      invalidatesTags: ["Chat"],
    }),
    //Delete set message
    deleteSetMessage: build.mutation({
      query: (messageId) => ({
        url: `${SET_CHAT_URL}/${messageId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Chat"],
    }),
  }),
});

export const {
  useGetAllSetChatsQuery,
  useDeleteSetMessageMutation,
  useGetSingleChatByIdQuery,
  useSendSetChatMutation,
} = setDiscussionApiSlice;

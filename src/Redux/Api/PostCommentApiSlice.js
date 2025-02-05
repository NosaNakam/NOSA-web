import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "./BaseApiUrl";
const POST_COMMENT = "set-post-comments";

export const postCommentApiSlice = createApi({
  reducerPath: "postCommentApi",
  baseQuery: baseQueryUrl,
  tagTypes: ["Comment"],
  endpoints: (build) => ({
    //get all post comments
    getAllPostComments: build.query({
      query: (postId) => ({
        url: `${POST_COMMENT}?postId=${postId}`,
        method: "GET",
      }),
      providesTags: ["Comment", "Post"],
    }),
    //create new post comment
    createPostComment: build.mutation({
      query: (newComment) => ({
        url: `${POST_COMMENT}`,
        method: "POST",
        body: newComment,
      }),
      invalidatesTags: ["Comment", "Post"],
    }),
    //Delete post comment
    deletePostComment: build.mutation({
      query: (commentId) => ({
        url: `${POST_COMMENT}/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Comment"],
    }),
  }),
});
export const {
  useGetAllPostCommentsQuery,
  useCreatePostCommentMutation,
  useDeletePostCommentMutation,
} = postCommentApiSlice;

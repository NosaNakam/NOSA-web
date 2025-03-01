import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Services/AppSlice";
import { authApiSlice } from "./Api/AuthApiSplice";
import { userApiSlice } from "./Api/UserApiSlice";
import { setApiSlice } from "./Api/SetApiSice";
import { setPostApiSlice } from "./Api/SetPostApiSlice";
import { setDiscussionApiSlice } from "./Api/SetDiscussionApiSlice";
import { setEventApiSlice } from "./Api/setEventApiSlice";
import { blogApiSlice } from "./Api/BlogApiSlice";
import { postCommentApiSlice } from "./Api/PostCommentApiSlice";
import { newsLetterSplice } from "./Api/NewsLetterApiSlice";
import { galleryApiSlice } from "./Api/GalleryApiSlice";

export const store = configureStore({
  reducer: {
    AppSlice: AppSlice,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [setApiSlice.reducerPath]: setApiSlice.reducer,
    [setPostApiSlice.reducerPath]: setPostApiSlice.reducer,
    [setDiscussionApiSlice.reducerPath]: setDiscussionApiSlice.reducer,
    [setEventApiSlice.reducerPath]: setEventApiSlice.reducer,
    [blogApiSlice.reducerPath]: blogApiSlice.reducer,
    [postCommentApiSlice.reducerPath]: postCommentApiSlice.reducer,
    [newsLetterSplice.reducerPath]: newsLetterSplice.reducer,
    [galleryApiSlice.reducerPath]: galleryApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApiSlice.middleware)
      .concat(userApiSlice.middleware)
      .concat(setApiSlice.middleware)
      .concat(setPostApiSlice.middleware)
      .concat(setDiscussionApiSlice.middleware)
      .concat(setEventApiSlice.middleware)
      .concat(blogApiSlice.middleware)
      .concat(postCommentApiSlice.middleware)
      .concat(newsLetterSplice.middleware)
      .concat(galleryApiSlice.middleware),
});

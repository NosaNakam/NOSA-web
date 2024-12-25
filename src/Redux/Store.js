import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Services/AppSlice";
import { authApiSlice } from "./Api/AuthApiSplice";
import { userApiSlice } from "./Api/UserApiSlice";
import { setApiSlice } from "./Api/SetApiSice";
import { setPostApiSlice } from "./Api/SetPostApiSlice";
import { setDiscussionApiSlice } from "./Api/SetDiscussionApiSlice";
import { setEventApiSlice } from "./Api/setEventApiSlice";

export const store = configureStore({
  reducer: {
    AppSlice: AppSlice,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [setApiSlice.reducerPath]: setApiSlice.reducer,
    [setPostApiSlice.reducerPath]: setPostApiSlice.reducer,
    [setDiscussionApiSlice.reducerPath]: setDiscussionApiSlice.reducer,
    [setEventApiSlice.reducerPath]: setEventApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApiSlice.middleware)
      .concat(userApiSlice.middleware)
      .concat(setApiSlice.middleware)
      .concat(setPostApiSlice.middleware)
      .concat(setDiscussionApiSlice.middleware)
      .concat(setEventApiSlice.middleware),
});

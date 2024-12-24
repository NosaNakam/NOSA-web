import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Services/AppSlice";
import { authApiSlice } from "./Api/AuthApiSplice";
import { userApiSlice } from "./Api/UserApiSlice";
import { setApiSlice } from "./Api/SetApiSice";
import { setPostApiSlice } from "./Api/SetPostApiSlice";

export const store = configureStore({
  reducer: {
    AppSlice: AppSlice,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [setApiSlice.reducerPath]: setApiSlice.reducer,
    [setPostApiSlice.reducerPath]: setPostApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApiSlice.middleware)
      .concat(userApiSlice.middleware)
      .concat(setApiSlice.middleware)
      .concat(setPostApiSlice.middleware),
});

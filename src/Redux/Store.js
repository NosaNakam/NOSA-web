import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Services/AppSlice";
import { authApiSlice } from "./Api/AuthApiSplice";
import { userApiSlice } from "./Api/UserApiSlice";
import { setApiSlice } from "./Api/SetApiSice";

export const store = configureStore({
  reducer: {
    AppSlice: AppSlice,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [setApiSlice.reducerPath]: setApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApiSlice.middleware)
      .concat(userApiSlice.middleware)
      .concat(setApiSlice.middleware),
});

import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Services/AppSlice";
import { authApiSlice } from "./Api/AuthApiSplice";
import { userApiSlice } from "./Api/UserApiSlice";

export const store = configureStore({
  reducer: {
    AppSlice: AppSlice,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApiSlice.middleware).concat(userApiSlice.middleware),
});

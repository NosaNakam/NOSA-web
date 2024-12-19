import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Services/AppSlice";
import { authApiSlice } from "./Api/AuthApiSplice";

export const store = configureStore({
  reducer: {
    AppSlice: AppSlice,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApiSlice.middleware),
});

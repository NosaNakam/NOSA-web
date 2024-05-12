import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Services/AppSlice";

export const store = configureStore({
  reducer: {
    AppSlice,
  },
});

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
const baseUrl = "http://localhost:5000/api";
export const baseQueryUrl = fetchBaseQuery({
  baseUrl,
  credentials: "include",
});

import { fetchBaseQuery } from "@reduxjs/toolkit/query";
// const baseUrl = "http://localhost:5000/api";
const baseUrl = "https://nosa-backend.onrender.com/api";
export const baseQueryUrl = fetchBaseQuery({
  baseUrl,
  credentials: "include",
});

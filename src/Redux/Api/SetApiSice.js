import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "./BaseApiUrl";
const SET_URL = "nosa-sets";

export const setApiSlice = createApi({
  reducerPath: "setApi",
  baseQuery: baseQueryUrl,
  tagTypes: [],
  endpoints: (build) => ({
    //get all sets
    getAllSets: build.query({
      query: () => ({
        url: `${SET_URL}`,
        method: "GET",
      }),
    }),
    //get set members
    getAllSetMembers: build.query({
      query: (setId) => ({
        url: `${SET_URL}/${setId}/verified-members`,
        method: "GET",
      }),
    }),
    getSingleSet: build.query({
      query: (setId) => ({
        url: `${SET_URL}/${setId}`,
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllSetsQuery, useGetAllSetMembersQuery, useGetSingleSetQuery } = setApiSlice;

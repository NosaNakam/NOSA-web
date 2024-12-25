import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "./BaseApiUrl";
const SET_EVENTS_URL = "set-events";

export const setEventApiSlice = createApi({
  reducerPath: "setEventsApi",
  baseQuery: baseQueryUrl,
  tagTypes: ["Event"],
  endpoints: (build) => ({
    //get all set events
    getAllSetEvents: build.query({
      query: (setId) => ({
        url: `${SET_EVENTS_URL}?setId=${setId}`,
        method: "GET",
      }),
      providesTags: ["Event"],
    }),
    //get single event by id
    getSetEventById: build.query({
      query: (eventId) => ({
        url: `${SET_EVENTS_URL}/${eventId}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllSetEventsQuery, useGetSetEventByIdQuery } = setEventApiSlice;

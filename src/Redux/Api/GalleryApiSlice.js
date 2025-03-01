import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "./BaseApiUrl";
const GALLERY_URL = "gallery";

export const galleryApiSlice = createApi({
  reducerPath: "galleryApi",
  baseQuery: baseQueryUrl,
  tagTypes: ["Gallery"],
  endpoints: (build) => ({
    //get all events
    getAllGallery: build.query({
      query: () => ({
        url: `${GALLERY_URL}`,
        method: "GET",
      }),
    }),
    getDetailGallery: build.query({
      query: ({ id }) => ({
        url: `${GALLERY_URL}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllGalleryQuery, useGetDetailGalleryQuery } = galleryApiSlice;

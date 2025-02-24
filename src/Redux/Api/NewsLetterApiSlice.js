import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryUrl } from "./BaseApiUrl";
const NEWSLETTER_URL = "newsletter";

export const newsLetterSplice = createApi({
  reducerPath: "newsLetter",
  baseQuery: baseQueryUrl,
  endpoints: (build) => ({
    subscribeToNewsletter: build.mutation({
      query: (data) => ({
        url: NEWSLETTER_URL,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSubscribeToNewsletterMutation } = newsLetterSplice;

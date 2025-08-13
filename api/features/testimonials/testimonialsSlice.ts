import { apiSlice } from "@/api/apiSlice";

export const testimonialsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postTestimonials: builder.mutation({
      query: (data) => ({
        url: "/testimonials",
        method: "POST",
        body: data,
      }),
    }),
    getTestimonials: builder.query({
      query: () => ({
        url: "/testimonials",
        method: "GET",
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetTestimonialsQuery, usePostTestimonialsMutation } =
  testimonialsSlice;

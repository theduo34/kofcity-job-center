import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500/' }),
    tagTypes: ['JobListings'],
    endpoints: (builder) => ({
        getJobListings: builder.query({
            query: () => 'job-listings',
            transformResponse: (res) => res.sort((a, b) => b.id - a.id),
            providesTags: ['JobListings']
        }),
        addJobListing: builder.mutation({
            query: (jobListing) => ({
                url: 'job-listings',
                method: "POST",
                body: jobListing,
            }),
            invalidatesTags: ['JobListings']
        }),
        updateJobListing: builder.mutation({
            query: (jobListing) => ({
                url: `job-listings/${jobListing.id}`,
                method: "PATCH",
                body: jobListing
            }),
            invalidatesTags: ['JobListings']
        }),
        deleteJobListing: builder.mutation({
            query: (id) => ({
                url: `job-listings/${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidatesTags: ['JobListings']
        })
    }),
});

export const {
    useGetJobListingsQuery,
    useAddJobListingMutation,
    useUpdateJobListingMutation,
    useDeleteJobListingMutation
} = apiSlice;

export default apiSlice;

// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const recordApi = createApi({
  reducerPath: 'recordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost/v1/' }),
  endpoints: (builder) => ({
    getAllRecords: builder.query({
      query: () => `getAllRecords`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllRecordsQuery } = recordApi
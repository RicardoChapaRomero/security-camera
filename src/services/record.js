// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const recordApi = createApi({
  reducerPath: 'recordApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://security-system.ngrok.io/api/v1/general/' }),
  endpoints: (builder) => ({
    getTopData: builder.query({
      query: () => `getTopData`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTopDataQuery } = recordApi
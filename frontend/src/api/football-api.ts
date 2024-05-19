// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const footballApi = createApi({
  reducerPath: 'footballApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://transfermarkt-db.p.rapidapi.com/v1',
  prepareHeaders: (headers, { getState }) => {
    headers.set('X-RapidAPI-Key', process.env.NEXT_PUBLIC_API_KEY as string)
    headers.set('X-RapidAPI-Host', process.env.NEXT_PUBLIC_API_HOST as string)
    // headers.set('Access-Control-Allow-Origin', '*')
    return headers
} }),
  endpoints: (builder) => ({
    getTeamsInfo: builder.query<any, any>({
      query: ({locale, club_id}) => {
        const params = {
            locale, club_id
        }
        return {url:'/clubs/profile',
        method:'GET',
        params:params
    }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTeamsInfoQuery } = footballApi
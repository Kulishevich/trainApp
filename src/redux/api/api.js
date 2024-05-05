import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = 'https://65e2384ca8583365b318095f.mockapi.io/trainApp';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => '/',
        })
    })
}) 

export const { useGetNotesQuery } = api

// export const api = createApi({
//     reducerPath: 'api',
//     tagTypes: ['Recipe'],
//     baseQuery: fetchBaseQuery({
//         baseUrl: API_URL,
//     }),
//     endpoints: builder => ({
//         getRecipes: builder.query({
//             query: () => '/',
//             providesTags: () => [{
//                 type: 'Recipe'
//             }]
//         }),
        
//     })
// })
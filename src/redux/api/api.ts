import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_RESULT = 'https://65e2384ca8583365b318095f.mockapi.io/result'

export const apiResult = createApi({
    reducerPath: 'apiResult',
    tagTypes: ['Result'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_RESULT,
    }),
    endpoints: (builder) => ({
        getResult: builder.query({
            query: () => '/',
            providesTags: ['Result'],
        }),
        editResult: builder.mutation({
            query: ({id, data}) => ({
                url: `/${id}`,
                body: data,
                method: 'PUT'
            }),
            invalidatesTags: ['Result']
        })
    })
}) 

export const { useGetResultQuery, useEditResultMutation } = apiResult
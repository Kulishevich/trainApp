import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_NOTE = 'https://65e2384ca8583365b318095f.mockapi.io/trainApp';
const API_RESULT = 'https://65e2384ca8583365b318095f.mockapi.io/result'

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Notes'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_NOTE,
    }),
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => '/',
            providesTags: ['Notes'],
        }),
        createNote: builder.mutation({
            query: (note) => ({
                url: '/',
                method: 'POST',
                body: note,
            }),
            invalidatesTags: ['Notes'],
        }),
        deleteNote: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
                body: id,
            }),
            invalidatesTags: ['Notes'],
        }),
        editNotes: builder.mutation({
            query: ({id, data}) => ({
                url: `/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Notes']
        })
    })
}) 

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



export const { useGetNotesQuery, useCreateNoteMutation, useDeleteNoteMutation, useEditNotesMutation } = api
export const { useGetResultQuery, useEditResultMutation } = apiResult
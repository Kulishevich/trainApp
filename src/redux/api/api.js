import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = 'https://65e2384ca8583365b318095f.mockapi.io/trainApp';

export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Notes'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
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

export const { useGetNotesQuery, useCreateNoteMutation, useDeleteNoteMutation, useEditNotesMutation } = api
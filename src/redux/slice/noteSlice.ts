import { createSlice } from "@reduxjs/toolkit";

type NoteType = {
    id: string,
    title: string,
    text: string
}

interface initialStateType {
    notes: NoteType[]
}

const initialState: initialStateType = {
    notes: []
}

export const noteSlice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers: {
        createNote: (state, action) => {
            state.notes.push(action.payload)
        },
        editNote: (state, action) => {
            state.notes = action.payload
        },
        deleteNote: (state, action) => {
            state.notes = [...state.notes.slice(0, action.payload), ...state.notes.slice(action.payload)]
        }
    }
})
import { configureStore } from "@reduxjs/toolkit";
import { api, apiResult } from "./api/api";

export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        [apiResult.reducerPath]: apiResult.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware, apiResult.middleware)
})
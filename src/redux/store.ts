import { configureStore } from "@reduxjs/toolkit";
import { apiResult } from "./api/api";

export const store = configureStore({
    reducer: {
        [apiResult.reducerPath]: apiResult.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiResult.middleware)
})
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {

    }
})

export type RootState = typeof store.getState
export type dispatch = typeof store.dispatch
import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./firebaseSlice"
import themeReducer from "./ThemeSlice"
export const store = configureStore({
    reducer: {
        projects:projectReducer,
        theme : themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { createSlice } from "@reduxjs/toolkit";

interface Theme{
    theme: string
}

const initialState:Theme = {
    theme:"light"
}

const themSlice= createSlice({
    name: 'theme',
    initialState,
    reducers:{
        toggleTheme: (state) =>{
            console.log("runs")
            state.theme = state.theme === "light" ?"dark" : "light" 
        }
    }
})
export const {toggleTheme} = themSlice.actions
export default themSlice.reducer
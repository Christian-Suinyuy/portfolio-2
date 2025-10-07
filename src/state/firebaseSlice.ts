import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface projects{
    title: string,
    description: string,
    github: string,
    deployed: string,
    crew: boolean,
}

const initialState: projects[] = []

const projectSlice = createSlice({
    name:"projectss",
    initialState,
    reducers:{

    },
    extraReducers: (builder)=>{
        builder.addCase(fetchProjects.fulfilled, (state, action)=>{
            state.push 
        })
    }
})
 
export const fetchProjects = createAsyncThunk(
    "projects/getProjects",
    async()=>{
        await new Promise((resolve)=> setTimeout(resolve, 100));
        return "me"
    }
)


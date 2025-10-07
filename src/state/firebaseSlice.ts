import { createAsyncThunk, createSlice, type PayloadAction, type PayloadActionCreator } from "@reduxjs/toolkit";
import { db } from "../firebase/sdk";
import { collection, query, getDocs } from "firebase/firestore";

interface projects{
    title: string,
    description: string,
    github: string,
    deployed: string,
    crew: boolean,
    id:string,
}

const initialState: projects[] = []

const projectSlice = createSlice({
    name:"projectss",
    initialState,
    reducers:{

    },
    extraReducers: (builder)=> {
        builder.addCase(fetchProjects.fulfilled, (state, action)=>{
            action.payload.forEach((doc:any)=>{
                state = [...state, {...doc.data(), id:doc.id}]
            })
        }).addCase(fetchProjects.pending, (state)=>{
            console.log(state)
        })
    }  
})
 
export const fetchProjects = createAsyncThunk(
    "projects/getProjects",
    async()=>{
        const projectsCollection = collection(db, "projects")
        const q = query(projectsCollection); // You can add filters here!
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    }
)

export default projectSlice.reducer


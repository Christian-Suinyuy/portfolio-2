import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { db } from "../firebase/sdk";
import { collection, query, getDocs } from "firebase/firestore";

export interface projects{
    title: string,
    description: string,
    github: string,
    deployed: string,
    crew: boolean,
    id:string,
}

const initialState:any =  []

const projectSlice = createSlice({
    name:"projects",
    initialState,
    reducers:{

    },
    extraReducers: (builder)=> {
        builder.addCase(fetchProjects.fulfilled, (_, action)=>{
                return action.payload
        }).addCase(fetchProjects.pending, ()=>{
            console.log("fetching ...")
        })
    }  
})
 
export const fetchProjects = createAsyncThunk(
    "projects/getProjects",
    async()=>{
        const projectsCollection = collection(db, "projects")
        const q = query(projectsCollection); // You can add filters here!
        const querySnapshot = await getDocs(q);
        // console.log(querySnapshot.docs)
        return querySnapshot.docs.map(doc=>({id: doc.id, ...doc.data()}))
    }
)

export default projectSlice.reducer


import {createSlice} from "@reduxjs/toolkit"

 export const headerSlice = createSlice({
    name:"headerSetter",
    initialState:{
        header:"",
    },

    reducers:{

        setHeader:(state,action)=>{
            console.log("Inside Header payload",action.payload);
            return{
                header:action.payload.headerTag
            }
        }
    }
})

export const {setHeader} = headerSlice.actions
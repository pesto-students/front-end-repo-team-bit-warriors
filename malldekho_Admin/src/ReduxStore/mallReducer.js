import {createSlice} from "@reduxjs/toolkit"

 export const MallSlice = createSlice({
    name:"MallSetter",
    initialState:{
        totalMalls:0,
    },

    reducers:{
         setTotalMalls:(state,action)=>{
            console.log("Inside Header payload",action.payload);
            return{
                totalMalls:action.payload.totalMalls
            }
        }

    }
})

export const {setTotalMalls} = MallSlice.actions
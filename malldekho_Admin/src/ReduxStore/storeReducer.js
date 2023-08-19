import {createSlice} from "@reduxjs/toolkit"

 export const StoreSlice = createSlice({
    name:"MallSetter",
    initialState:{
        totalStores:0
    },

    reducers:{
        
        setTotalStores:(state,action)=>{
            console.log("Inside Header payload",action.payload);
            return{
                totalStores:action.payload.totalStores
            }
        }

    }
})

export const {setTotalStores} = StoreSlice.actions
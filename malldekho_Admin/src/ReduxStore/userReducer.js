import {createSlice} from "@reduxjs/toolkit"

 export const UserSlice = createSlice({
    name:"storeSetter",
    initialState:{
        totalUsers:0,
    },

    reducers:{
        setTotalUsers:(state,action)=>{
            console.log("Inside Header payload",action.payload);
            return{
                totalUsers:action.payload.totalUsers
            }
        },

    }
})

export const {setTotalUsers} = UserSlice.actions
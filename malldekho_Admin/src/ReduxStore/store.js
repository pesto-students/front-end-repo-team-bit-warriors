import { configureStore } from "@reduxjs/toolkit";
import { headerSlice } from "./HeaderReducer";
import { MallSlice } from "./mallReducer";
import { StoreSlice } from "./storeReducer";
import { UserSlice } from "./userReducer";
const store= configureStore({
    reducer:{
        PageHeader:headerSlice.reducer,
        MallNumber:MallSlice.reducer,
        StoreNumber:StoreSlice.reducer,
        UserNumber:UserSlice.reducer   
    }
})

export default store;
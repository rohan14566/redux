import { createSlice } from "@reduxjs/toolkit";
export const dataSlice=createSlice({
    name:'Data',
    initialState:{
      info:[
        {name:'rohan', age:24, course:"web",rating:4},
        {name:'rahul',age:22, course:"dev",rating:3}
        ]
    },
    reducers:{
        Addata:(state,action)=>{
            state.info=[...state.info,action.payload]
        }
    }
})
export const{Addata}=dataSlice.actions
export default dataSlice.reducer

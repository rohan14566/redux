import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../features/Forms/dataSlice'
export default configureStore({
    reducer:{
        Data:dataReducer
    },
})
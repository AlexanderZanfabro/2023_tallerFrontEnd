import { configureStore } from "@reduxjs/toolkit";
import datosIdReducer from '../features/datosSlice';


export const store = configureStore ({
    reducer:{
        datosId:datosIdReducer
    }
})
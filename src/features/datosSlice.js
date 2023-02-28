import {createSlice} from '@reduxjs/toolkit';

import { Immer } from 'immer';


const initialState = {
    datosId: 0,
}

export const datosSlice = createSlice({
    name:'datosId',
    initialState,
    reducers: {
        usarIdDepartamento:(state, action) => {
            state.datosId = action.payload;                   
            console.log('info del store',action.payload);
        }
    }
});

export const {usarIdDepartamento} = datosSlice.actions;
export default datosSlice.reducer; 


  /* el payload es una propiedad del objeto action (tiene dos propiedades: type y payload -> esta ultima tre datos) */ 
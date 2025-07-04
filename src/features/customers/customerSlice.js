import reducer from "../accounts/accountSlice"
import { createSlice } from "@reduxjs/toolkit";
//reducers,initial states , action creaters
const initialState = {
 fullName: '',
 nationalID: '',
 createdAt: '',
}

const customerSlice = createSlice({
    name:'customer',
    initialState,
    reducers:{
     createCustomer:{
     prepare(fullName, nationalID){
     return{
        payload: {
            fullName, nationalID, createdAt: new Date().toISOString()
        }
     }
     },
     reducer(state, action){
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAt = action.payload.createdAt;
     },
     },
     updateName(state, action){
      state.fullName = action.payload
     },
    }
})

export default customerSlice.reducer

export const {createCustomer, updateName} = customerSlice.actions;


/*
//creating customer reducer
export default function customerReducer(state = initialState, action){
    switch(action.type){
        case'customer/createCustomer' :
        return{...state, fullName:action.payload.fullName, nationalID:action.payload.nationalID,
               createdAt: action.payload.createdAt
        }

        case 'customer/updateName':
          return{...state, fullName: action.payload}

        default:
            return state;

    }
}


export function createCustomer(fullName, nationalID){
    return {type:'customer/createCustomer', payload: {fullName, nationalID, createdAt: new Date().toISOString()}}
}

export function updateName(fullName){
    return {type: 'customer/updateName', payload:fullName}
}
*/
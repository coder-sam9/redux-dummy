import { createSlice } from "@reduxjs/toolkit";

const initialState={
    counter:0
}
const counterSlice=createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increment:(state)=>{
            console.log('in the counter');
            
                state.counter++;
        },
        decrement:(state)=>{
                state.counter--;
        },
        increase:(state,action)=>{
                state.counter=state.counter+action.payload
        },
    }
});
export const {increment,decrement,increase} = counterSlice.actions;
export default counterSlice.reducer;
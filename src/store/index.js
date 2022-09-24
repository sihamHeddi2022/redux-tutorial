import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice(
   { 
    name:"counter",
    initialState: { value:0 },
    reducers:{
        increment(state,actions){
            state.value++
        },
        decrement(state,actions){
            state.value--
        },
        addBy(state,actions){
            state.value=state.value+actions.payload
        }
    }
   }
)


export const actions = counterSlice.actions



export const store = configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})
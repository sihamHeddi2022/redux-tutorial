import { configureStore, createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice(
   { 
    name:"counter",
    initialState: { value:0 },
    reducers:{
        increment(state,actions){
            state.counter.value++
        },
        decrement(state,actions){
            state.counter.value--
        },
        addBy(state,actions){
            state.counter.value=state.counter.value+actions.payload
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
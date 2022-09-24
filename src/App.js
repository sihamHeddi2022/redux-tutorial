import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from "./store/index";

function App() {

    const state = useSelector((state)=>{return state.counter.value})
   

    const dispatch = useDispatch()
    
    const increment = ()=>{
   
      dispatch(actions.increment())


    }

    const decrement = ()=>{

      dispatch(actions.decrement())

    }

    const addBy = ()=>{

      dispatch(actions.addBy(20))

    }
    
    return (
      <div className="App">
          counter : {state}

          <button onClick={()=>increment()}>Increment</button> |
          <button onClick={()=>decrement()}>Decrement</button> |
          <button onClick={()=>addBy()}>Add By 20</button>

      </div>
    );
  
}

export default App;

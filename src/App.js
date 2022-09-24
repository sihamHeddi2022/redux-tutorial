import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function App() {

    const state = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
    
    const increment = ()=>{

      dispatch({type:"INC"})

    }

    const decrement = ()=>{

      dispatch({type:"DEC"})

    }

    const addBy = ()=>{

      dispatch({type:"ADD",payload:20})

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

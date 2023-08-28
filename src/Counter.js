import './App.css';
import { useState, useEffect } from 'react';



function Counter() {
  const [counter, setCounter] =useState(0);

  useEffect(() => {
    setCounter(5);
    alert("you clicked me");
  }, []);



const addCount = () => {
  setCounter(counter +1 );
}
const minusCount = () => {
  setCounter(counter -1 );
}

  return (
    <div className="App">
      <button onClick={addCount}>+</button>
      <h1>{counter}</h1>
      <button onClick={minusCount}>-</button>
     
    </div>
  );
}

export default Counter;

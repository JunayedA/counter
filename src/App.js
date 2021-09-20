import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count,setCount] = useState(0);
  const handleIncrease = () =>setCount(count+1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
export default App;

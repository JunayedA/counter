import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>External users</h3>
      {
        users.map(user => <User name={user.name} email={user.email  }>{user.name}</User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className="App-header">
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}
function Counter(){
  const [count,setCount] = useState(0);
  const handleIncrease = () =>setCount(count+1);
  const handleDecrease = () =>setCount(count-1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <br />
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}
export default App;

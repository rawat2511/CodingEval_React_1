import './App.css';
import { Input } from './Components/Input';
import { useState } from 'react';
import { Todos } from './Components/Todos';

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    console.log(input);
    setTodos([...todos, input]);
    console.log(todos);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <Input addTodo={addTodo}/>
      <Todos todos={todos} />
    </div>
  );
}

export default App;

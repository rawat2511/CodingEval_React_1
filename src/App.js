import './App.css';
import { Input } from './Components/Input';
import { useState } from 'react';
import { Todos } from './Components/Todos';

function App() {

  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const addTodo = (input) => {
    console.log(input);
    setTodos([...todos, input]);
    console.log(todos);
  };

  const changeStatus = (idClicked) => {
    console.log(idClicked);
    const tasks = todos.map((todo) => todo.id !== idClicked ? todo : {...todo, completed: !todo.completed});
    setTodos(tasks);
  };

  return (
    <div className="App">
      <h1>TODO APP</h1>
      <Input addTodo={addTodo}/>
      <Todos todos={todos} changeStatus={changeStatus} showCompleted="false" />
      <button onClick={() => {
        setShowCompleted(!showCompleted)
      }}>Show completed Todos</button>
      {
        showCompleted &&  <Todos todos={todos} changeStatus={changeStatus} showCompleted="true" />
      }
    </div>
  );
}

export default App;

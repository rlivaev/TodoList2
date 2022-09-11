import "./App.css";
import {useState} from "react";




function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () =>{
    if(todo !== ""){
      setTodos([...todos, todo]);
      setTodo ("");
    } 
  }
  return (
    <div className="App">
     <h1>React Todo App</h1>
     <div className="input-wrapper">
      <input 
       onChance={(e) => {setTodo(e.target.value)}}
       type="text" 
       name="todo"
       placeholder="Create a new todo"
       />
      <button onClick={addTodo} className="add-buttom">Add</button>
     </div>
    </div>
  );
  }
export default App;

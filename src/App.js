import "./App.css";
import {useState} from "React";

function App() {
  const [todo, setTodo] = useState("");
  return (
    <div className="App">
     <h1>React Todo App</h1>
     <div className="input-wrapper">
      <input type="text" name="todo"placeholder="Create a new todo"/>
      <button className="add-buttom">Add</button>
     </div>
    </div>
  );
  }
export default App;

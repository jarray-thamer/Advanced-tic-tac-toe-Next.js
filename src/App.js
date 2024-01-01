import { useRef, useState } from "react";
import "./App.css";

function App() {
  // let todosArray = ['hello','world'];

  const [todos, setTodos] = useState([]);
  const inputRef = useRef("");

  const handleAddTodo = () => {
    if (inputRef.current.value) {
      const text = inputRef.current?.value;
      setTodos([...todos, { completed: false, text }]);
      inputRef.current.value = "";
      console.log("hundler", todos);
    }
  };

  const handleItemDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
    <h2>To Do List</h2>
    <div className="to-do-container">
      <ul>
        {todos.map(({ text, completed }, index) => {
          return (
            <div className="item">
              <li
                className={completed ? "done" : ""}
                key={index}
                onClick={() => handleItemDone(index)}
              >
                {text}
              </li>
              <span onClick={() => handleDeleteItem(index)} className="trash">❌</span>
            </div>
          );
        })}
      </ul>
      <input ref={inputRef} placeholder="Enter item..." />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  </div>
);
}

export default App;

import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef("");

  const handleAddTodo = () => {
    if (inputRef.current.value) {
      const text = inputRef.current?.value;
      setTodo([...todo, { completed: false, text }]);
      inputRef.current.value = "";
      console.log("handler", todo);
    }
  };

  const handleItemDone = (index) => {
    const newTodo = [...todo];
    newTodo[index].completed = !newTodo[index].completed;
    setTodo(newTodo);
  };

  const handleDeleteItem = (index) => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  };

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-container">
        <ul>
          {todo.map(({ text, completed }, index) => {
            return (
              <div className="item">
                <li
                  className={completed ? "done" : ""}
                  key={index}
                  onClick={() => handleItemDone(index)}
                >
                  {text}
                </li>
                <span onClick={() => handleDeleteItem(index)} className="trash">
                  ❌
                </span>
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

import React, { useState } from "react";
import ToDo from "./ToDoItems";

function App() {
  const [item, setItem] = useState("");
  const [list, addList] = useState([]);

  function itemState(event) {
    const value = event.target.value;
    setItem(value);
  }

  function clickHandler() {
    addList((prevValue) => [...prevValue, item]);
    setItem("");
  }

  function deleteItem(id) {
    addList((prevValue) => {
      return prevValue.filter((i, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={itemState} type="text" value={item} />
        <button onClick={clickHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((todo, index) => (
            <ToDo key={index} id={index} text={todo} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

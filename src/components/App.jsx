import React, { useState } from "react";
import ToDo from "./ToDoItems";
import InputArea from "./InputArea";

function App() {
  const [list, addList] = useState([]);

  function clickHandler(item) {
    addList((prevValue) => [...prevValue, item]);
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
      <InputArea clickHandler={clickHandler} />
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

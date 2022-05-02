import React, { useState } from "react";

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
          {list.map((todo) => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

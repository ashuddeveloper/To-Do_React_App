import React, { useState } from "react";

function ToDoItems(props) {
  const [isDone, setDone] = useState(false);

  function clickHandler() {
    setDone((prevValue) => !prevValue);
  }

  return (
    <div>
      <li
        style={{
          textDecoration: isDone ? "line-through" : "none"
        }}
        onClick={clickHandler}
      >
        {props.text}
        <button
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default ToDoItems;

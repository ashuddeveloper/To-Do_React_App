import React, { useState } from "react";

function InputArea(props) {
  const [item, setItem] = useState("");
  function itemState(event) {
    const value = event.target.value;
    setItem(value);
  }

  return (
    <div className="form">
      <input onChange={itemState} type="text" value={item} />
      <button
        onClick={() => {
          props.clickHandler(item);
          setItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

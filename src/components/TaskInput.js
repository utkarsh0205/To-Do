// TaskInput.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions";
import { FaPlus } from "react-icons/fa";
import "../style/TaskInput.css";

function TaskInput() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTask = () => {
    if (text.trim() !== "") {
      dispatch(addTask(text));
      setText("");
    }
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add new task..."
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleAddTask}>
        <FaPlus />
      </button>
    </div>
  );
}

export default TaskInput;

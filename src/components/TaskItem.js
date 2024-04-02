// TaskItem.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, markDone, toggleSelect } from "../actions";
import { FaCheckSquare } from "react-icons/fa";
import "../style/TaskItem.css";
import { FaCheck } from "react-icons/fa";

function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);

  const handleToggleSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={`task-item ${isSelected ? "selected" : ""}`}>
      <div className="select-box" onClick={handleToggleSelect}>
        {isSelected && <FaCheck />}
      </div>
      <span>{task.text}</span>
    </div>
  );
}

export default TaskItem;

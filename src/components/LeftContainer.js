// LeftContainer.js
import React, { useState } from "react";
import TaskInput from "./TaskInput";
import TaskOptions from "./TaskOptions";
import { FaSearch, FaPlus } from "react-icons/fa";
import "../style/LeftContainer.css";
import TaskItem from "./TaskItem";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, markDone, selectTask } from "../actions";

function LeftContainer() {
  const [selectedTaskIds, setSelectedTaskIds] = useState([]);
  const dispatch = useDispatch();

  const handleSelect = (taskId) => {
    if (selectedTaskIds.includes(taskId)) {
      setSelectedTaskIds(selectedTaskIds.filter((id) => id !== taskId));
    } else {
      setSelectedTaskIds([...selectedTaskIds, taskId]);
    }
  };

  const handleDelete = () => {
    dispatch(deleteTask(selectedTaskIds));
    setSelectedTaskIds([]);
  };

  const handleMarkDone = () => {
    dispatch(markDone(selectedTaskIds));
    setSelectedTaskIds([]);
  };

  return (
    <div className="left-container">
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
      <TaskInput />

      <div className="button-container">
        <button className="button" onClick={handleSelect}>
          Select
        </button>
        <button className="button" onClick={handleDelete}>
          Delete
        </button>
        <button className="button" onClick={handleMarkDone}>
          Mark Done
        </button>
      </div>
    </div>
  );
}

export default LeftContainer;

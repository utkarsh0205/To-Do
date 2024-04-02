// TaskOptions.js
import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, markDone, editTask } from "../actions";
import "../style/TaskOptions.css";

function TaskOptions() {
  const dispatch = useDispatch();
  const selectedTaskIds = useSelector((state) => state.selectedTaskIds);

  const handleDelete = () => {
    dispatch(deleteTask(selectedTaskIds));
  };

  const handleMarkDone = () => {
    dispatch(markDone(selectedTaskIds));
  };

  const handleEdit = () => {
    // Implement edit functionality
    // For example, you can dispatch an action to open a modal or form for editing tasks
    console.log("Edit functionality will be implemented here");
  };

  return (
    <div className="task-options">
      <button className="button" onClick={handleEdit}>
        Edit
      </button>
      <button className="button" onClick={handleDelete}>
        Delete
      </button>
      <button className="button" onClick={handleMarkDone}>
        Mark Done
      </button>
    </div>
  );
}

export default TaskOptions;

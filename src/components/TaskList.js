// TaskList.js
import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem.js";
import TaskOptions from "./TaskOptions";
import "../style/TaskList.css";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="task-list-container">
      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;

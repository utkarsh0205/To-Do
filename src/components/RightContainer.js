// RightContainer.js
import React from "react";
import TaskList from "./TaskList";
import "../style/RightContainer.css";

function RightContainer() {
  return (
    <div className="right-container">
      <div className="heading-box">
        <h2>My Todo App</h2>
      </div>
      <TaskList />
    </div>
  );
}

export default RightContainer;

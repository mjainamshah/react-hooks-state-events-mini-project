import React from "react";

function Task({text, category, onDelete}) {  // Define the Task component to display individual tasks
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete"  onClick={onDelete} >X</button>
    </div>
  );
}
// Export the Task component for use in other parts of the application
export default Task;

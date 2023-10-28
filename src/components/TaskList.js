import React from "react";
import Task from "./Task";

// Define the TaskList component to display a list of tasks
function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task key={task.text} text={task.text} category={task.category} onDelete={() => 
        handleDelete(index)} />
      ))}
    </div>
  );
}
// Export the TaskList component for use in other parts of the application
export default TaskList;


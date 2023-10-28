import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {useState} from "react";

import { CATEGORIES, TASKS } from "../data";          //import data from external file
console.log("Here's the data you're working with");   //log the data to console for purpose of debugging
console.log({ CATEGORIES, TASKS });

function App() {                                      //define the main App component
  const [tasks, setTasks] = useState(TASKS);          //initialize state for tasks using the Tasks data
  const handleTaskFormSubmit = (formData) => {        //function to handle the submission of a new Task. 
    setTasks([...tasks, formData])                    //add the new task to the tasks array
  };
  const handleDelete = (index) => {                   //function to handle deletion of a task
    setTasks(tasks.filter((task, i) => i !== index))  //remove Task from its index
  };

  return (                                            //render the main component
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter tasks={tasks} setTasks={setTasks} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={tasks} setTasks={setTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;

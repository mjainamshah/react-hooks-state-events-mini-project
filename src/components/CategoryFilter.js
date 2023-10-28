import { useState} from "react";
import {CATEGORIES, TASKS} from "../data";

function CategoryFilter({setTasks}) {   // Define the CategoryFilter component that allows filtering tasks by category
  const [selectedCategory, setSelectedCategory] = useState("All") // Initialize state for the selected category and set the default value to "All"
  const handleCategorySelection = (category) => {   // Function to handle the selection of a category
    setSelectedCategory(category);  // Update the selected category state
    setTasks( // Update the tasks based on the selected category
      category === "All" ? TASKS : TASKS.filter((task) => task.category === category)
    )
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "selected" : ""}
          onClick={() => handleCategorySelection(category)}>{category}</button>
      ))}
    </div>
  );
}
// Export the CategoryFilter component for use in other parts of App
export default CategoryFilter;

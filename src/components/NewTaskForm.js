import {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) { // Define the NewTaskForm component for adding new tasks

  const [formData, setFormData] = useState({           // Initialize state for the form data, including text and category
    text: "",
    category: "",
  })

  const handleChange = (event) => {                    // Function to handle changes in form input fields
    const {name, value} = event.target;
    setFormData({...formData, [name]: value})          // Update the formData state with the new value for the corresponding field
  }

  const handleSubmit = (event) => {                    // Function to handle form submission
    event.preventDefault();
    onTaskFormSubmit(formData);                        // Call the provided onTaskFormSubmit function with the form data
    setFormData({ text: "", category: ""});            // Reset the form data to its initial state
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleChange}>
          {/* render <option> elements for each category here */}
          {categories.map((category) => category !== "All" && <option key={category}>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

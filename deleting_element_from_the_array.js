**Deleting Element from the Array**

Statement) After learning how to add an element to an Array, you must know how to delete something too! Deleting an element from the array helps us with functions like deleting a task from the To Do List!

To begin with, we will first create a delete button, and then we will add and Event Listener to it, which will call the function of deleting the element, on getting clicked!

// Create the button element
const deleteButton = document.createElement("button");
deleteButton.classList.add("delete-button");
deleteButton.textContent = "Delete";

// Add the event listener
deleteButton.addEventListener("click", () => {
  
  // Function to delete 1 element at the position index
  tasks.splice(index, 1);

  // Re-render the task list to get the updated DOM
  renderTaskList();
});

taskItem.appendChild(deleteButton);

// Display the initial task list on the DOM
renderTaskList();
Using the splice method, we remove the task from the array. After deleting the task, the renderTaskList function is called to update the task list on the DOM.

Task
Add the delete button to the code.
Add an event listener to perform the delete action on getting clicked.
Rerender the list after deleting.
Add the delete button to the taskItem.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------
SOLUTION = // Within your existing code, where you create task items:

const taskItem = document.createElement("li");

// ... other code for task information

// Create the delete button
const deleteButton = document.createElement("button");
deleteButton.classList.add("delete-button");
deleteButton.textContent = "Delete";

// Add event listener to the delete button
deleteButton.addEventListener("click", () => {
  const index = tasks.indexOf(task); // Get the index of the task to be deleted
  tasks.splice(index, 1); // Remove the task from the array
  renderTaskList(); // Re-render the task list to reflect the deletion
});

// Append the delete button to the task item
taskItem.appendChild(deleteButton);

----------------------------------Explanation:

Delete Button Creation: A button element is created with the class "delete-button" and the text "Delete".
Event Listener: An event listener is attached to the button, listening for the "click" event.
Deletion Logic: When the button is clicked:
const index = tasks.indexOf(task); finds the index of the task to be deleted within the tasks array.
tasks.splice(index, 1); removes the task at the specified index from the array using the splice() method.
renderTaskList(); calls the function (assuming it's defined elsewhere) to re-render the task list on the DOM, updating the displayed content.
Button Placement: The delete button is appended to the taskItem element, associating it with the corresponding task.
Key Points:

Event Listeners: They enable interaction with elements in the DOM, triggering code execution in response to user actions.
splice() Method: Used for modifying arrays by removing or replacing elements at a specified index.
Re-rendering: Updating the DOM based on changes in the data ensures the displayed content accurately reflects the current state of the array.
Visual Cues: The "delete-button" class can be used to style the button appropriately for visual clarity.

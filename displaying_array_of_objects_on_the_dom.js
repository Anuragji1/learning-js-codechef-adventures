**Displaying Array of Objects on the DOM**

Statement) Now we know how to store data in an Array and how to access it.
Let us now see how we can display the data from the array to the DOM using for loop.

Let's start by considering an array of student objects:

const students = [
  {
    name: "John Doe",
    rollNo: 12345,
    class: "Grade 10",
  },
  {
    name: "Jane Smith",
    rollNo: 67890,
    class: "Grade 9",
  },
  // ... additional student objects
];
Our goal is to display this array of student objects on the DOM in a structured and readable format.

To achieve this, we can utilise a loop, such as a for loop, to iterate over the array and extract the information from each student object.
We can then dynamically create HTML elements to represent each student's data and append them to the DOM.

Here's an example of how we can display the student objects on the DOM using a for loop:

const studentList = document.getElementById("student-list");

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  
  const studentInfo = document.createElement("div");
  studentInfo.classList.add("student-info");
  
  const nameElement = document.createElement("p");
  nameElement.textContent = `Name: ${student.name}`;
  
  const rollNoElement = document.createElement("p");
  rollNoElement.textContent = `Roll No: ${student.rollNo}`;
  
  const classElement = document.createElement("p");
  classElement.textContent = `Class: ${student.class}`;
  
  studentInfo.appendChild(nameElement);
  studentInfo.appendChild(rollNoElement);
  studentInfo.appendChild(classElement);
  
  studentList.appendChild(studentInfo);
}
Task
Let's consider an array of task objects with three tasks.
We want to display the task information on the DOM, including the description, deadline, and done status.
Using a similar approach with a for loop and dynamically creating HTML elements, iterate over the tasks array and display the task information on the DOM.

-------------------------------------------------------------------------------------------------------------------------------------------------------------
SOLUTION = index.js: const tasks = [
  // ... your task objects here
];

const taskListContainer = document.getElementById("task-list"); // Assuming you have a container with ID "task-list" in your HTML

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];

  const taskItem = document.createElement("li"); // Create a list item for each task

  taskItem.innerHTML = `
    <p>Description: ${task.description}</p>
    <p>Deadline: ${task.deadline}</p>
    <p>Done: ${task.done ? "Yes" : "No"}</p>
  `;

  taskListContainer.appendChild(taskItem); // Append the task item to the container
}

---------------------------Explanation:

Access Task List Container: const taskListContainer = document.getElementById("task-list"); retrieves a reference to the HTML element where the tasks will be displayed.
Iterate Through Tasks: The for loop iterates over each task object in the tasks array.
Create Task Item: const taskItem = document.createElement("li"); creates a new list item element for each task.
Construct Task Information: Template literals build an HTML string containing paragraphs for the task's description, deadline, and done status (using a ternary operator for conditional display).
Append Task Item: taskListContainer.appendChild(taskItem); adds the newly created task item to the task list container, dynamically populating the list with task information.
Key Points:

Dynamic Element Creation: JavaScript can create HTML elements dynamically, allowing for flexible and data-driven content.
DOM Manipulation: The innerHTML property enables efficient injection of HTML content into elements.
Clear Structure: Using list items (li) within a container creates a well-organized task list on the screen.
Conditional Display: The ternary operator concisely displays "Yes" or "No" for the done status based on the task.done property.

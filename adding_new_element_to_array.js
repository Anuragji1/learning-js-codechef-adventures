**Adding New Element To Array**

Statement) We can add new objects to an existing array, enabling us to expand our list with ease.
Let us explore this functionality and learn how to integrate it into our own applications.

To add a new task to an array, we can follow a simple process:

First, we define the structure of our tasks using an object. Each task object typically contains properties like description, deadline, and done status.
Then, we push this new task object into the existing array of tasks using the push() method.
Here's an example to demonstrate this concept:

const tasks = [
  {
    description: "Complete project proposal",
    deadline: "2023-07-20",
    done: false,
  },
  {
    description: "Prepare presentation slides",
    deadline: "2023-07-22",
    done: false,
  },
];

// Create a single new task element
const newTask = {
  description: "Submit final report",
  deadline: "2023-07-25",
  done: false,
};

// Add it to the array
tasks.push(newTask);
By employing this approach, we can dynamically expand our array of tasks to accommodate new additions without the need for excessive code modifications or manual adjustments.

Task
Your task is to add a new task to the tasks array.
The new task should have a description, deadline, and initial done status.
Use the push() method to add it to the array.

index.js:// Initial array of tasks
const tasks = [
  {
    description: "Complete project proposal",
    deadline: "2023-07-20",
    done: false,
  },
  {
    description: "Prepare presentation slides",
    deadline: "2023-07-22",
    done: false,
  },
];

// Create a new task with any description, deadline, or done status of your choice.

// Add it to the tasks array



// DONOT TOUCH THE CODE BELOW
// Display the updated task list on the DOM
const taskList = document.getElementById("task-list");

for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];

  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = `Description: ${task.description}`;

  const deadlineElement = document.createElement("p");
  deadlineElement.textContent = `Deadline: ${task.deadline}`;

  const doneStatusElement = document.createElement("p");
  doneStatusElement.textContent = `Done: ${task.done ? "Yes" : "No"}`;

  taskItem.appendChild(descriptionElement);
  taskItem.appendChild(deadlineElement);
  taskItem.appendChild(doneStatusElement);

  taskList.appendChild(taskItem);
}


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
SOLUTION = index.js: // Create a new task object with desired properties
const newTask = {
  description: "Attend coding workshop", // Replace with your desired description
  deadline: "2024-01-20", // Replace with your desired deadline
  done: false  // Initially set to not done
};

// Add the new task to the tasks array using the push() method
tasks.push(newTask);

---------------------Explanation:

New Task Object: An object named newTask is created with the following properties:
description: A string containing the task's description.
deadline: A string representing the task's deadline.
done: A boolean value set to false to indicate the task is not yet completed.
Adding to Array: The tasks.push(newTask) line appends the newly created newTask object to the end of the tasks array. This effectively adds the new task to the existing list of tasks.
Key Points:

Object Structure: Task objects encapsulate related task data within a single entity, making it easier to manage and manipulate.
push() Method: The push() method is a fundamental array method that adds a new element to the end of the array, expanding its length.
Dynamic Updates: By using push(), you can dynamically add new tasks to the array without having to modify the array's original structure or manually insert elements at specific positions.

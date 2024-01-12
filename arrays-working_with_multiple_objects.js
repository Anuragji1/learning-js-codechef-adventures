**Arrays - Working with Multiple Objects**

Statement) Consider a task management system where we have multiple tasks, each with its own set of properties.

Uncool method
Initially, we may be tempted to create individual variables for each task, such as task1, task2, and so on, up to task10.

To begin, let's imagine we have two tasks: task1 and task2.
We could create individual objects for each task and assign their respective properties:

const task1 = {
  description: "Complete project proposal",
  deadline: "2023-07-12",
  done: true
};

const task2 = {
  description: "Prepare presentation slides",
  deadline: "2023-07-22",
  done: false
};
If there were 10 such task what would you do?
In such a case, instead of creating individual variables for each task, we can leverage the power of arrays to store multiple task objects together.

How to use Arrays?
An array is an ordered collection of elements that can hold various data types, including objects.
We can create an array called tasks and populate it with the task objects:

const tasks = [
  {
    description: "Complete project proposal",
    deadline: "2023-07-12",
    done: true
  },
  {
    description: "Prepare presentation slides",
    deadline: "2023-07-22",
    done: false
  }
];
Retrieve array information
By using an array, we can easily add, remove, and access elements based on their indices.

tasks[0] will give us the first task.
tasks[1] will give us the second task, and so on.
To access the properties of, say, the second task we will use:

tasks[1].description
tasks[1].date
tasks[1].done
Task
Given the following two tasks, store them in an array:

const task1 = {
  description: "Complete project proposal",
  deadline: "2023-07-12",
  done: true
};

const task2 = {
  description: "Prepare presentation slides",
  deadline: "2023-07-22",
  done: false
};
Now, inside the Alert() function, alert the second task details.
Uncomment the Alert() function call to see the alert message.
index.js = const tasks // Make the array tasks containing the two tasks.


function Alert() {
    alert(
        "Description:"+/* get task description */+
    "\nDeadLine:"+/* get task deadline */+
    "\nDone:"+/* get task done status */);
}


// Alert();

---------------------------------------------------------------------------------------------
SOLUTION = index.js = const tasks = [
  {
    description: "Complete project proposal",
    deadline: "2023-07-12",
    done: true
  },
  {
    description: "Prepare presentation slides",
    deadline: "2023-07-22",
    done: false
  }
];


function Alert() {
    alert("Description:"+tasks[1].description+
    "\nDeadLine:"+tasks[1].deadline+
    "\nDone:"+tasks[1].done);
}


Alert();

-------------------
Here's the code explanation:

1. Array Creation:

const tasks = [...]; creates an array named tasks to hold multiple task objects.
Each object within the array represents a single task with its description, deadline, and done status.
2. Task Storage:

The two task objects task1 and task2 are directly placed within the tasks array, eliminating the need for separate variables. This makes managing multiple tasks more efficient and organized.
3. Alert Function:

function Alert() { ... } defines a function named Alert to display an alert message containing the details of the second task.
4. Accessing Task Details:

tasks[1] accesses the second task object within the array (remember that array indices start at 0).
tasks[1].description, tasks[1].deadline, and tasks[1].done retrieve the specific properties of the second task object.
5. Alert Message Construction:

Template literals (backticks) are used to construct a string that combines the retrieved task properties, formatting them for readability in the alert message.
6. Alert Display:

Alert(); calls the Alert function, triggering the alert message with the second task's details.
Key Points:

Arrays for Multiple Objects: Arrays provide a structured way to store and manage collections of objects, making it easier to work with multiple related entities like tasks.
Accessing Elements: Use array indices (e.g., tasks[1]) to access individual elements within the array.
Object Properties: Access object properties using dot notation (e.g., tasks[1].description) to retrieve specific data from each object.
Alert Function: This function demonstrates how to access and display information from the array of tasks, simulating a user-facing action.

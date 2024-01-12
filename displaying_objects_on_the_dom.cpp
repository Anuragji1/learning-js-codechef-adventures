**Displaying Objects on the DOM**

Statement) We have seen how we can declare objects in JS.

Now, let's visualize the difference between these two approaches by displaying the student information on the DOM using HTML.

<body>
  <div id="student-info"></div>
</body>
Using multiple variables:

const studentName = "John Doe";
const studentRollNo = 12345;
const studentClass = "Grade 10";

document.getElementById("student-info").innerHTML = `
  <p>Name: ${studentName}</p>
  <p>Roll No: ${studentRollNo}</p>
  <p>Class: ${studentClass}</p>
`;
Using an object:

const student = {
  name: "John Doe",
  rollNo: 12345,
  class: "Grade 10",
};

document.getElementById("student-info").innerHTML = `
  <p>Name: ${student.name}</p>
  <p>Roll No: ${student.rollNo}</p>
  <p>Class: ${student.class}</p>
`;
In real-world programming,

Objects are extensively used to represent entities, such as users, products, or transactions.
They provide a foundation for building modular and maintainable code, enabling us to tackle complex problems with clarity and efficiency.
Task
Use the Object you made in the last lecture, and display it in the DOM.

Name the Object as Task

NOTE: The HTML div inside which you need to display the data has an id of taskDetails.
The output window should be something like below:

taskdetails
Use ternary operator for displaying the "Is task done?" property.

BONUS: Change the done property to true or false and see how the DOM changes.

--------------------------------------------------------------------------------
SOLUTION = // Solution as follows

const Task = {
    description: "This is a task",
    deadline: "2023-07-13",
    done: false
}

document.getElementById("taskDetails").innerHTML = `
  <p>Task Description: ${Task.description}</p>
  <p>Dead Line: ${Task.deadline}</p>
  <p>Is the task done?: ${Task.done?"YES":"NO"}</p>
`;

----------Here's the code explanation:

Task Object Creation:

const Task = { ... } defines a Task object with three properties:
description: A string containing the task's description.
deadline: A string representing the task's deadline.
done: A boolean value indicating whether the task is completed.
Accessing the Target Element:

document.getElementById("taskDetails") retrieves a reference to the HTML div element with the ID "taskDetails". This is where the task information will be displayed.
Constructing HTML Content:

Template literals (backticks) are used to create an HTML string containing three paragraphs:
<p>Task Description: ${Task.description}</p> displays the task description.
<p>Dead Line: ${Task.deadline}</p> shows the task deadline.
<p>Is the task done?: ${Task.done ? "YES" : "NO"}</p> conditionally displays "YES" or "NO" based on the done property using a ternary operator.
Injecting Content into the DOM:

document.getElementById("taskDetails").innerHTML = ... assigns the constructed HTML string to the innerHTML property of the retrieved div element. This dynamically updates the content of the element, displaying the task information.

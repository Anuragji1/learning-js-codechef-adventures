Adding Elements To The Task Sections Using JS
Statement) Let's complete the code on the right to see how things look!

Review the code in the index.html and index.js files
Write any sample date and task as per your choice in index.js
Check whether the task got added to the 'High Priority Tasks' or 'Low Priority Tasks' section
Read the code / play around with the code to understand why this was happening

// Enter a sample date ('yyyy-mm-dd') of your choice
var sampleDate = new Date('2024-02-15'); // Example: February 15, 2024

// Enter a sample task of your choice
var sampleTaskText = 'Complete JavaScript course'; // Example task

// Selecting elements using getElementById
var highPriorityContainer = document.getElementById('highPriorityContainer');
var lowPriorityContainer = document.getElementById('lowPriorityContainer');

// Initialize a variable to current date
var currentDate = new Date();

// If sampleDate is before today, it's a high priority task
// Else, it's a low priority task
if (sampleDate <= currentDate) {
  var newTaskElement = document.createElement('div');
  newTaskElement.innerHTML = sampleTaskText;
  highPriorityContainer.appendChild(newTaskElement);
} else {
  var newTaskElement = document.createElement('div');
  newTaskElement.innerHTML = sampleTaskText;
  lowPriorityContainer.appendChild(newTaskElement);
}

-----------------------------------------------------------------------------------
SOLUTION = // Enter a sample date ('yyyy-mm-dd') of your choice
var sampleDate = new Date('2024-02-15'); // Example: February 15, 2024

// Enter a sample task of your choice
var sampleTaskText = 'Complete JavaScript course'; // Example task

// Selecting elements using getElementById
var highPriorityContainer = document.getElementById('highPriorityContainer');
var lowPriorityContainer = document.getElementById('lowPriorityContainer');

// Initialize a variable to current date
var currentDate = new Date();

// If sampleDate is before today, it's a high priority task
// Else, it's a low priority task
if (sampleDate <= currentDate) {
  var newTaskElement = document.createElement('div');
  newTaskElement.innerHTML = sampleTaskText;
  highPriorityContainer.appendChild(newTaskElement);
} else {
  var newTaskElement = document.createElement('div');
  newTaskElement.innerHTML = sampleTaskText;
  lowPriorityContainer.appendChild(newTaskElement);
}

----------
Explanation:

Setting sample data:

Replace the placeholders in sampleDate and sampleTaskText with your desired values.
Retrieving elements:

document.getElementById fetches the elements with IDs "highPriorityContainer" and "lowPriorityContainer" from the HTML document.
Comparing dates:

if (sampleDate <= currentDate) checks if the sample date is on or before today.
Adding high priority task:

If the condition is true, a new div element is created and its content is set to sampleTaskText.
This new element is then appended to the "highPriorityContainer", visually adding it to the high priority task list.
Adding low priority task:

If the condition is false, a new div element is created and its content is set to sampleTaskText.
This new element is then appended to the "lowPriorityContainer", visually adding it to the low priority task list.

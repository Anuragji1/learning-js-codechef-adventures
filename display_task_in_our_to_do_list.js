**Display tasks in our To Do List**
In our previous problem, we learned how a task gets added to the 'High Priority Tasks' or 'Low Priority Tasks' section based on the date.

When the task is added - it needs some display properties

It needs to have a check box
It needs to have a task
It needs to have its target completion date
How do we add multiple elements into a division or a container?

Review the code on the right - play around with the 'content1Description' and 'content1Date' for each Task.

Statement) Once you have reviewed the code - do the following

Replicate the code to create a 'Task 3' in 'Container 2'
You will need to create variables such as 'content3Description', 'content3Date', 'checkbox3', 'label3'
Note: We are providing the task and date each time.
We will learn to accept user inputs and integrate to our current DOM learnings in the next module.

index.js = // Existing code for Task 1 and Task 2 remains the same

// Code for Task 3 in Container 2:

var container2 = document.getElementById("container2");
container2.innerHTML = "";

// Create variables for Task 3's content
var content3Description = "This is Task 3";
var content3Date = "2023-11-22"; // Example date

// Create elements for checkbox, label, and content item
var checkbox3 = document.createElement("input");
checkbox3.type = "checkbox";

var label3 = document.createElement("label");
label3.innerHTML = content3Description + " (Target date: " + content3Date + ")";

var contentItem3 = document.createElement("div");
contentItem3.appendChild(checkbox3);
contentItem3.appendChild(label3);

// Append content item to Container 2
container2.appendChild(contentItem3);

------
  index.html= <!DOCTYPE html>
<html>
<head>
  <title>Element Display</title>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <h1>Element Display Example</h1>
  <div id="container1" class="container"></div>
  <div id="container2" class="container"></div>
  <script src="index.js"></script>
</body>
</html>
----------
  style.css= .container {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  

--------------------------------------------------------------------------------------------------------------
SOLUTION = index.js = // Existing code for Task 1 and Task 2 remains the same

// Code for Task 3 in Container 2:

var container2 = document.getElementById("container2");
container2.innerHTML = "";

// Create variables for Task 3's content
var content3Description = "This is Task 3";
var content3Date = "2023-11-22"; // Example date

// Create elements for checkbox, label, and content item
var checkbox3 = document.createElement("input");
checkbox3.type = "checkbox";

var label3 = document.createElement("label");
label3.innerHTML = content3Description + " (Target date: " + content3Date + ")";

var contentItem3 = document.createElement("div");
contentItem3.appendChild(checkbox3);
contentItem3.appendChild(label3);

// Append content item to Container 2
container2.appendChild(contentItem3);

---------
Explanation:

Retrieving Container 2:

var container2 = document.getElementById("container2"); gets the element with the ID "container2" from the HTML document.
container2.innerHTML = ""; clears any previous content within it.
Creating Task 3 elements:

Variables for task description and date are created and filled with desired values.
Checkbox, label, and content item elements are created using document.createElement.
Checkbox type is set to "checkbox".
Label's text content is set to display the task description and target date.
Checkbox and label are appended to the content item element.
Adding Task 3 to Container 2:

container2.appendChild(contentItem3); appends the newly created content item (containing the checkbox and label for Task 3) to Container 2, visually adding Task 3 to the list.

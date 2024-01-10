**Create Element & Display functions**
------------------------------------
Statement) In the previous problem, we created the three tasks and added them to the 2 containers.

However - the same code was repeated.

We created the 'checkbox', 'task' and 'target date' for each task
We then added each task to the corresponding container
Suppose there are a 100 tasks in your To-Do List - how do we handle this?

We can solve this by making a separate functions for each of the activities above!

So our code till now will now be divided into two parts:

A Create function to create the HTML elements.
A Display function to render the HTML created using JS.

Task- Go through the code in index.js.
We have defined 2 functions - 'displayContents' and 'createContentElement'.

Update the code on Line 24 so that you assign the user input to the correct container depending on the date
Play around with the user date to check how the container assignment changes

-- index.js= // ... (rest of the code remains the same)

function displayContents(contentDescription, contentDate) {
  if (new Date(contentDate) <= currentDate) {  // Corrected comparison
    var container1 = document.getElementById("container1");
    var contentItem1 = createContentElement(contentDescription, contentDate);
    container1.appendChild(contentItem1);
  } else {
    var container2 = document.getElementById("container2");
    var contentItem2 = createContentElement(contentDescription, contentDate);
    container2.appendChild(contentItem2);
  }
}

// ... (rest of the code remains the same)

----- index.html = <!DOCTYPE html>
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

------ style.css = .container {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }

----------------------------------------------------
SOLUTION = index.js : // ... (rest of the code remains the same)

function displayContents(contentDescription, contentDate) {
  if (new Date(contentDate) <= currentDate) {  // Corrected comparison
    var container1 = document.getElementById("container1");
    var contentItem1 = createContentElement(contentDescription, contentDate);
    container1.appendChild(contentItem1);
  } else {
    var container2 = document.getElementById("container2");
    var contentItem2 = createContentElement(contentDescription, contentDate);
    container2.appendChild(contentItem2);
  }
}

// ... (rest of the code remains the same)

--------
Explanation of the change:

Corrected comparison: The original code had currentDate.getTime(), which is unnecessary because new Date(contentDate) already creates a Date object for comparison. The corrected code directly compares new Date(contentDate) with currentDate.
Container assignment: The else block now correctly retrieves "container2" and appends the newly created content item to it, ensuring tasks with later dates are added to the appropriate container.

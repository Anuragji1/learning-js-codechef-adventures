**Using Event Handlers in jQuery**

Statement 5.5) We have already seen what event handlers are in our last project on To Do List. In this article, we'll explore how to use event handlers in jQuery, and we'll compare the process with vanilla JavaScript.

We'll use the example of clicking a button to change text content, building upon the previous example.

Using Event Handlers with Vanilla JavaScript
In vanilla JavaScript, we add event listeners to elements using addEventListener(). Let's modify our previous example to change the text content when a button is clicked:

<body>
  <p id="paragraph">This is the original text.</p>
  <button id="btn-click">Click Me!</button>
</body>
Let's take a look at the JS.

const btn = document.getElementById('btn-click');
const paragraph = document.getElementById('paragraph');

btn.addEventListener('click', function() {
  paragraph.textContent = 'Updated text using vanilla JavaScript';
});
This is something you are familiar with!

Using Event Handlers with jQuery
Now, let's achieve the same result using jQuery's event handling. The HTML will be the same as the above one.

$(document).ready(function() {
  // jQuery event handling starts here
  $("#btn-click").click(function() {
    $("#paragraph").text('Updated text using jQuery event handling');
  });
});
In this jQuery example, we use $("#btn-click").click() to add a click event handler to the button. When the button is clicked, the function inside .click() is executed, and it changes the paragraph's text content using the .text() function.

Comparison
Both vanilla JavaScript and jQuery allow us to attach event handlers to elements. However, jQuery's syntax is more concise and readable. In vanilla JavaScript, we use addEventListener() to add event listeners, which requires more code. jQuery's .click() provides a straightforward and efficient way to add a click event handler without the need for additional verbose code.

Task
Now, here's your task:

Delete the Vanilla JS code.
Using jQuery's event handling, add an event listener to the button so that when it's clicked, the data entered in the input field is read, and an alert displays the input data.
HINT: use the .val() on the selected input text field to get its value.

Happy coding!
--index.js: // Delete this code of Vanilla JS and code in jQuery the same logic

document.addEventListener('DOMContentLoaded', function() {
  // Event handling starts here
  const btnClick = document.getElementById('btn-click');

  btnClick.addEventListener('click', function() {
    // Read the data from the input field
    const inputText = document.getElementById('input-field').value;

    // Display the input data in an alert
    alert("You entered: " + inputText);
  });
});

--index.html: <!DOCTYPE html>
<html>
<head>
  <title>jQuery Event Handling with Input Field</title>
  <!-- Include jQuery library from a CDN -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
  <input type="text" id="input-field" placeholder="Enter your text">
  <button id="btn-click">Click Me!</button>
</body>
</html>

---------------------------------------------------------------------------------------
SOLUTIOn = index.js: $(document).ready(function() {
  // Add event listener to the button
  $("#btn-click").click(function() {
    // Get the input value
    const inputData = $("#inputField").val();

    // Display the input data in an alert
    alert("You entered: " + inputData);
  });
});

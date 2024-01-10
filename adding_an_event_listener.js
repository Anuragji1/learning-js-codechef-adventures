**Adding an Event Listener**

Statement) Let's begin with the basics.
An event listener is a function that waits for a particular event to occur and then executes a set of instructions.

Syntax
The syntax for adding an event listener is as follows:

element.addEventListener(eventType, listenerFunction);
Let's break down the syntax:

element: This is the HTML element to which you want to attach the event listener. You can obtain a reference to the element using methods like getElementById(), querySelector(), or by storing it in a variable after creating it dynamically.
eventType: This specifies the type of event you want to listen for, such as "click", "keydown", "submit", "mouseover", etc. The event type is enclosed in quotes as a string.
listenerFunction: This is the JavaScript function that will be executed when the specified event occurs. It can be an existing function or an anonymous function defined inline.
Adding Event Listener Example
The best way to learn event listeners is by adding it to a button element, so we can detect when the button is clicked and perform an action accordingly. Here's an example that demonstrates the syntax of adding an event listener to a button:

const button = document.getElementById("myButton");

function handleClick() {
  // Code to execute when the button is clicked
}

button.addEventListener("click", handleClick);
Let's break down the syntax:

In the example above, we obtain a reference to the button element using getElementById() and store it in the button variable.
We define a function handleClick() that contains the code to be executed when the button is clicked.
Finally, we attach the event listener using addEventListener(), specifying the event type as "click" and passing the handleClick function as the listener.
Note: Remember that the listener function will be called automatically when the specified event occurs on the element.
Task
Add event listener to the button element.
Inside the handler function, alert a message saying "You just clicked me!"

--index.js= // Get a reference to the button element
const button = document.getElementById("myButton");

// Define the event listener function
function handleClick() {
  
}

// Add the event listener to the button

--index.html = <!DOCTYPE html>
<html>
<head>
  <title>Adding Event Listener Example</title>
</head>
<body>
  <button id="myButton">Click Me!</button>
</body>
</html>

-----------------------------------------------------------------------------------------------------------------------------------------------------------
SOLUTION = // Get a reference to the button element
const button = document.getElementById("myButton");

// Define the event listener function
function handleClick() {
  alert("You just clicked me!");
}

// Add the event listener to the button
button.addEventListener("click", handleClick);

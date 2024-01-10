**Writing Arrow Functions with Event Listeners**

Statement) Arrow functions, also known as Lambda functions, provide a concise and expressive way to define inline functions.

Instead of creating a separate named function, we can define the function directly in the event listener, making the code more compact and readable
The lambda function simplifies the event handling code by eliminating the need for a separate named function declaration
We can directly define the desired behaviour inline, which enhances code readability and reduces unnecessary function declarations.
Consider the following example that handles a button click event:

const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  alert("Button clicked!");
});
Task
Add event listener to the button element.
Using arrow function alert the message "You learnt Arrow Functions with Event Listeners".

-----------------------------------------------------------------------------------------
SOLUTION = index.js = // Get a reference to the button element
const button = document.getElementById("myButton");

// Add the event listener using an arrow function
button.addEventListener("click", () => {
  alert("You learnt Arrow Functions with Event Listeners");
});
-------
--index.html : <!DOCTYPE html>
<html>
<head>
  <title>Adding Event Listener Example</title>
</head>
<body>
  <button id="myButton">Click Me!</button>
</body>
</html>

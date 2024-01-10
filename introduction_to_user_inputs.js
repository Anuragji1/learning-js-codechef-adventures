**Introduction To User Inputs**
-------------------------------
Up until now, our project relied on hardcoded inputs, providing a fixed set of values and behaviours.

In this module, we will dive into a crucial aspect of web development — "handling user inputs".
This allows us to dynamically receive and process data from users, allowing our programs to adapt and respond to individual inputs.

User input data can take various forms, such as text entered into input fields, button clicks, mouse movements, or even touch gestures on mobile devices. JavaScript provides powerful tools and techniques to capture, validate, and utilize this input effectively, enhancing the interactivity and functionality of our web applications.

The type of inputs we have in this To Do List project are:

Text inputs
Date inputs
Button Clicks

---------
  Here's an introduction to user inputs in JavaScript:

Collecting User Input:

HTML forms:
Create forms using <form>, <input>, <textarea>, <select>, and other elements.
Submit forms to a server-side script for processing or handle them with JavaScript.
JavaScript events:
Listen for user interactions like clicks, key presses, and mouse movements.
Use event listeners (e.g., onclick, onchange, onkeydown) to trigger JavaScript functions.
DOM manipulation:
Access and modify element values directly using document.getElementById and properties like value, textContent, and innerHTML.
Common Methods for Accessing Input Values:

Form elements:
element.value for text fields, password fields, number fields, etc.
element.checked for checkboxes and radio buttons
element.selectedIndex and element.options[index].value for select elements
Event objects:
event.target.value for the value of the element that triggered the event
Example (text field input):

JavaScript
function handleInput() {
  var userInput = document.getElementById("myInput").value;
  console.log("User entered:", userInput);
}

document.getElementById("myInput").addEventListener("input", handleInput); // Trigger function on every input change

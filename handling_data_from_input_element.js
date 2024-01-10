**Handling data from Input element**

Statement) One of the most common tasks in web development is capturing user input from input elements and effectively utilizing that data. Whether it's a simple text input, checkboxes, radio buttons, or dropdown menus, handling input data is essential for creating interactive and dynamic web experiences.

Let's see how we can access the data from a text input field.

const inputTextField = document.getElementById("inputText");
const inputData = inputTextField.value;
We select the element using DOM methods, then using the .value method we access the value.

Example
We usually perform the task of getting data from the input field based on some button clicks.

Let's consider a scenario where we have an input field, and we want to capture the user's input and show it in an alert message when a button is clicked.

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
  const inputTextField = document.getElementById("inputText");
  const inputData = inputTextField.value;
  alert(inputData);  
});
The JavaScript code obtains reference to the input field and the submit button using getElementById().
We then attach an event listener to the submit button using addEventListener().
Inside the event listener function, we capture the value entered in the input field by accessing the .value method. We store this value in a variable called "inputData".
Finally, we display an alert message.
Task
Complete the event listener function to display the text from the input field as an alert.

--index.js = const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
  // Access the input field using getElementById
  
  // Access the data of the input field using .value method
  
  // alert the input data
});

----- indexx.html= <!DOCTYPE html>
<html>
<head>
  <title>Handling Data from Input Elements</title>
</head>
<body>
  <input type="text" id="inputText" placeholder="Enter some text" />
  <button id="submitButton">Submit</button>
</body>
</html>

------------------------------------------------------------------
SOLUTION = index.js: const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
  const inputTextField = document.getElementById("inputText");
  const inputData = inputTextField.value;  // Get the value from the input field

  alert(inputData);  // Display the input data in an alert box
});

-----------------------------------------------------------------

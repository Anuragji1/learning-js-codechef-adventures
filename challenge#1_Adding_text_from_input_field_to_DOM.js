** Challenge #1 - Adding text from input field to DOM **

Statement) It's time to get your hands dirty now!

Till now we have learned:

How to manipulate DOM.
How to add event handlers and perform task on clicks
How to read data from input fields
It's time to mix things up to go one more step forward towards making a To Do List!

Task
You have an input field and a button, you need to take the data from the input field and display it inside a <div> below the input field and button.
Expected output
Example Image
NOTE: It's not like having a list of tasks that will be added one after the other.
When you Submit something new, the previous one will get replaced.

--index.js: // select the input text field using getElementById
const textInput = 

// select the submit button using getElementById    
const submitButton = 

// select the output div using getElementById
const outputDiv = 


// Add the event handler to the submitButton to get the data from the input field and add it to a textDiv which in turn is added to the output div. 
// This allows you to add multiple data as we did in the last section.

--index.html: <!DOCTYPE html>
<html>
<head>
  <title>Display Input Data</title>
</head>
<body>
  <input type="text" id="textInput" placeholder="Enter your message" />
  <button id="submitButton">Submit</button>
  <div id="outputDiv"></div>
</body>
</html>

-----------------------------------------------------------------------------------

SOLUTION = index.js: // select the input text field using getElementById
const textInput = document.getElementById("textInput");

// select the submit button using getElementById    
const submitButton = document.getElementById("submitButton");

// select the output div using getElementById
const outputDiv = document.getElementById("outputDiv");

// Add the event handler to the submitButton to get the data from the input field and add it to the output div below this line
submitButton.addEventListener("click", () => {
  const inputText = textInput.value;
  outputDiv.textContent = inputText;
});

----------------

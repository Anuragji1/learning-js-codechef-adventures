**Handling Date Input from User**

Statement) When building web applications, the ability to handle date input from users is a common requirement. Whether you're creating a booking system, a reminder feature, or a calendar application, effectively capturing and processing dates is essential.

Let's consider a scenario where we have a date input field, and we want to capture the selected date from the user and display it along with the word "Date: " in a <div> element when the user clicks the submit button.

Let's take a look at the JavaScript directly:

const dateInput = document.getElementById("dateInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");

submitButton.addEventListener("click", () => {
  const selectedDate = dateInput.value;
  const formattedDate = new Date(selectedDate).toLocaleDateString();

  outputDiv.textContent = "Date: " + formattedDate;
});
We attach an event listener to the submit button using addEventListener(). Inside the event listener function (triggered when the button is clicked), we capture the selected date from the input field by accessing the value property of the date input element and store it in a variable called "selectedDate".

Next, we convert the selected date to a Date object using the new Date() constructor. We then use the toLocaleDateString() method to format the date according to the user's locale.

Finally, we set the textContent property of the output <div> to the formatted date prefixed with "Date: ". This dynamically displays the selected date in the output <div>.

Task
Complete the event listener function.


-- index.html = <!DOCTYPE html>
<html>
<head>
  <title>Handling Date Input from Users</title>
</head>
<body>
  <input type="date" id="dateInput" />
  <button id="submitButton">Submit</button>
  <div id="outputDiv"></div>
</body>
</html>

-- index.js= const dateInput = document.getElementById("dateInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");

submitButton.addEventListener("click", () => {
  const selectedDate =  // Select the date value
  const formattedDate = // Formar the date using the toLocaleDateString function

  outputDiv.textContent = // Change the text content of the outputDiv to the date 
});

------------------------------------------------------------------------------------
SOLUTION = 
         ----index.js= const dateInput = document.getElementById("dateInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");

submitButton.addEventListener("click", () => {
  const selectedDate = dateInput.value; // Get the date value from the input field
  const formattedDate = new Date(selectedDate).toLocaleDateString(); // Format the date

  outputDiv.textContent = "Date: " + formattedDate; // Display the formatted date in the output div
});

--------Explanation:

Get element references: The code retrieves references to the input field, button, and output div using document.getElementById.
Add event listener: An event listener is attached to the button, listening for the "click" event.
Handle click: When the button is clicked:
const selectedDate = dateInput.value; gets the date value entered in the input field.
const formattedDate = new Date(selectedDate).toLocaleDateString(); creates a Date object from the selected date and formats it using the user's locale.
outputDiv.textContent = "Date: " + formattedDate; sets the text content of the output div to "Date: " followed by the formatted date, displaying it on the page.
Key points:

User-friendly formatting: toLocaleDateString() ensures the date is displayed in a format that's familiar to the user based on their locale settings.
Error handling: Consider adding error handling to ensure the selected date is valid and handle potential formatting issues.

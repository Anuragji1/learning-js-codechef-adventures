**Using forEach loop**

Statement) The forEach loop is a powerful and straightforward method in JavaScript that allows you to iterate over elements in an array and perform actions on each element. It is especially useful for rendering data on the DOM, as you can loop through the array and dynamically display the content.

Let's use an example where we have an array of string data and use the forEach loop to render the data on the DOM as a list.

HTML file (index.html):

<body>
  <ul id="data-list">
    <!-- The data will be rendered here -->
  </ul>
</body>
Now, let's see the JS.

// Sample Array
const dataArray = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

// Selecting the element
const dataList = document.getElementById('data-list');

// Rendering using forEach loop
dataArray.forEach(function(dataItem) {
  const listItem = document.createElement('li');
  listItem.textContent = dataItem;
  dataList.appendChild(listItem);
});

We are appending the items in the array using forEach loop to the ul element on the DOM. This will make the array elements render on the DOM.

Task
Complete the code of the forEach loop in the code provided.

--index.js= // your code goes here
const dataArray = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"];

// Get the data list ul element
const dataList = document.getElementById('data-list');

// Rendering using forEach loop

----index.html= <!DOCTYPE html>
<html>
<head>
  <title>Rendering Data with forEach Loop using jQuery</title>
  <!-- Include jQuery library from a CDN -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
  <ul id="data-list">
    <!-- The data will be rendered here -->
  </ul>
</body>
</html>

----------------------------------------------------------------
SOLUTION = // your code goes here
const dataArray = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"];

// Get the data list ul element
const dataList = document.getElementById('data-list');

// Rendering using forEach loop
dataArray.forEach(function(dataItem) {
  // Create a new list item element
  const listItem = document.createElement('li');

  // Set the text content of the list item to the current data item
  listItem.textContent = dataItem;

  // Append the list item to the data list
  dataList.appendChild(listItem);
});

-------------------------------Explanation:

dataArray.forEach(function(dataItem) { ... });: Iterates through each element in the dataArray.
const listItem = document.createElement('li');: Creates a new list item element (<li>) for each data item.
listItem.textContent = dataItem;: Sets the text content of the list item to the current dataItem.
dataList.appendChild(listItem);: Appends the newly created list item to the dataList element, effectively adding it to the list on the DOM.
Key Points:

Arrays and Loops: The forEach loop is a fundamental tool for working with arrays in JavaScript.
DOM Manipulation: It's often used to dynamically generate content on the DOM based on array data.
Concise Syntax: The forEach loop provides a clean way to iterate without explicit indices.
Expected Result:

When you run this code, it will create an unordered list with five items: Toyota, Honda, Ford, Chevrolet, and BMW.

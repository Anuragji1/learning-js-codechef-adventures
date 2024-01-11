**Modifying CSS Based on User Input**

Statement) The things we have covered so far mostly involved:

Adding listeners to buttons to receive user inputs
Accessing the user input data
Modifying the DOM based on some user input.
You can also modify the CSS to give your webpage more visual sensations.

If we take example of of To Do List, may be you can do something like, once the task is done, the entire task is marked as green, whereas tasks that are not done are marked in red.

Let's see by an example how we can modify CSS based on some button clicks. HTML:

<body>
  <p id="text">This is the text!</p>
  <button id="button">Change Color</button>
</body>
Now, let's take a look at the CSS:

#text {
    color: blue;
}
We have the color property initially set to blue.

var textElement = document.getElementById("text");

var button = document.getElementById("button");

button.addEventListener("click", () => {
    textElement.style.color = 'red';
})
In the above JS Code, we are selecting the textElement first, then selecting the button and adding an event listener. Inside the event listener function we modify the style.color property to red.

You can add similar event listeners to checkboxes, or mouse hover properties and change the styles of HTML elements.

Task
Add an event listener to the button.
Inside the event listener function, modify the style of the text such that it gets a strike.
In CSS we use the following for adding a strike to a text:

textDecoration = "line-through"

--index.js = // select text element using getElementById
var textElement = 

// get the button element using getElementById
var button = 

// Add the event listener to the button to strike the text on clicking the button
-----------------------------------------------------------------------------------------------------------------------
SOLUTION = 

index.js= var textElement = document.getElementById("text");
var button = document.getElementById("button");

button.addEventListener("click", () => {
  textElement.style.textDecoration = "line-through";
});

------Explanation:

Select elements: The code retrieves references to the text element and button using document.getElementById.
Add event listener: An event listener is attached to the button, listening for the "click" event.
Modify text decoration: Inside the event listener function, textElement.style.textDecoration = "line-through"; sets the textDecoration property of the text element to "line-through", adding a strikethrough to the text.
Now, when the user clicks the button, the text will have a line through it, demonstrating how to dynamically modify CSS styles based on user input.

**Selecting HTML elements using jQuery**

Statement 5.4) Until now, we have been using document.getElementById() in vanilla JavaScript or normal JS to achieve this. However, jQuery simplifies this process with its concise syntax, making it easier and faster to select elements and change their text content. In this article, we'll explore how to achieve the same result using both vanilla JavaScript and jQuery, highlighting the advantages of the latter.

Selecting and Changing with Vanilla JavaScript
In vanilla JavaScript, we select HTML elements by their unique id attribute using the document.getElementById() method. Let's consider a simple example where we have an element with id="message" and we want to change its text content.

<body>
  <p id="message">This is a paragraph.</p>
</body>
// Select the element with id="message"
const messageElement = document.getElementById('message');
// Change the text content
messageElement.textContent = 'Updated text using vanilla JavaScript';
Selecting and Changing with jQuery
Now, let's achieve the same result using jQuery. To use jQuery, we first include the library in our HTML file, usually from a CDN, as shown in the following code:

<body>
  <p id="message">This is a paragraph.</p>
</body>
$(document).ready(function() {

// Select the element with id="message" and change the text content
$("#message").text('Updated text using jQuery');
});
In this jQuery example, we wrapped our code inside $(document).ready() to ensure it executes only after the document is fully loaded. We then used the $("#message") selector to target the element with id="message", and the .text() function to change its text content to "Updated text using jQuery".

Task
Now that you understand how to select HTML elements and change their text content using jQuery, try the following task:

Delete the existing code written using normal Vanilla JS.
Then code using jQuery.
Select the element with id "paragraph" from the HTML file and use jQuery to change its text content to anything you like.
NOTE: Remember to include the jQuery library and use $(document).ready() to ensure your code executes correctly. Have fun experimenting with jQuery's simplicity and power!

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
SOLUTION = index.js: // jQuery code starts here
$(document).ready(function() {
    // Select the element with id="paragraph" and change the text content
    $("#paragraph").text("This is the updated text using jQuery!");
});

----index.html : <!DOCTYPE html>
<html>
<head>
  <title>jQuery Text Content Example</title>
  <!-- Include jQuery library from a CDN -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
  <p id="paragraph">This is the original text.</p>
</body>
</html>

------------------Explantions:- 
HTML:

jQuery CDN: You've correctly added the link to the jQuery CDN within the <head> section of the HTML file. This ensures jQuery is available for your JavaScript code to use.
Title and Content: The HTML file includes a title and some basic content with element IDs for later manipulation.
JavaScript:

**<span class="math-inline">\(document\)\.ready\(\)\:** You've wrapped your alert message within the `(document).ready()` function. This ensures the code only runs after jQuery is fully loaded and ready.
Alert Message: The alert("HELLO WORLD! :)"); line displays the desired message when jQuery is available.
Overall, the solution successfully demonstrates including and using jQuery to display a simple message. Good job!

Here are some additional points to consider:

You can replace the alert message with any jQuery code that interacts with the HTML elements like changing their content or text color.
The chosen jQuery version (3.7.0) is slightly outdated. While it still works, using the latest version (currently 3.6.0) might be preferable for security and compatibility reasons

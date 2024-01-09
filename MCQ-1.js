Statement) How would you set the HTML content of the following <p> element using JavaScript?

<p id="original">
   This is the original content 
</p>

Select one of the following options.
document.getElementById("original") = "This is the new content";
original.innerHTML = "This is the new content";
document.getElementById("original").innerHTML = "This is the new content";

--------------------------------------------------------------------------
  SOLUTION = 
The correct answer is:

document.getElementById("original").innerHTML = "This is the new content";
---------------------------------
  
Explanation:

Selecting the Element:

document.getElementById("original") retrieves the <p> element with the ID "original" from the DOM.
Accessing the innerHTML Property:

.innerHTML is a property that allows you to access and modify the HTML content within an element.
Assigning New Content:

= "This is the new content" sets the value of the innerHTML property to the new text you want to display, replacing the existing content within the <p> element.
Incorrect Options:

document.getElementById("original") = "This is the new content"; is incorrect because it attempts to assign a string value directly to the element itself, rather than using the innerHTML property to modify its content.
original.innerHTML = "This is the new content"; is incorrect because original is not defined in this context. You need to use document.getElementById() to retrieve the element first.

The DOM allows developers to dynamically access and manipulate the content, structure, and style of an HTML document.

Using DOM, Javascript can do the following

Find Class / Id / Elements inside the HTML
Add or Remove Elements
Respond to events such as clicks or input changes

----------

Here are common ways to make changes to a web page using the DOM in JavaScript:

1. Changing Content:

Modifying Text Content:
Access the text content of an element using element.textContent and modify it:
const heading = document.querySelector('h1');
heading.textContent = 'New Heading Text';

Replacing Entire HTML Content:
Replace all content within an element using element.innerHTML:
const container = document.getElementById('content');
container.innerHTML = '<p>New content here!</p>';

2.)  Adding and Removing Elements:

Creating New Elements:
Use document.createElement() to create new elements:
const newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';

Appending Elements:
Add new elements to existing elements using parent.appendChild(child):
const body = document.body;
body.appendChild(newParagraph);

Removing Elements:
Remove elements using parent.removeChild(child):
const oldElement = document.getElementById('old-element');
oldElement.parentNode.removeChild(oldElement);

3.) Updating Styles:

Accessing Style Properties:
Modify the CSS styles of elements using element.style:
const button = document.querySelector('button');
button.style.backgroundColor = 'blue';
button.style.color = 'white';


 Handling Events:

Attaching Event Listeners:
Make web pages interactive by responding to user events like clicks, keypresses, etc.:
const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

Always ensure changes are made after the DOM is fully loaded to avoid errors.
Use appropriate selectors to target specific elements accurately.
Consider potential performance implications when making DOM manipulations, especially for large or frequent changes.

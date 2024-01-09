In the previous problem - we replaced the body with specific content from the Javascript file.

Just like CSS selectors, we can also select and modify specific elements using DOM using selectors such as tags, Id and Class. Sample syntax as follows:

document.getElementById('elementid').innerHTML = 'Practical courses across the software development spectrum';

-------------------------------------------------------------------------------------------------------------
Here are the common ways to modify and add elements using the DOM in JavaScript:

1. Modifying Existing Elements:

Changing Text Content:

JavaScript
const element = document.getElementById('myElement');
element.textContent = 'New text content';
--
Replacing Entire HTML Content:

JavaScript
const element = document.querySelector('.myClass');
element.innerHTML = '<p>New HTML content here</p>';
--
Updating Styles:

JavaScript
const element = document.querySelector('button');
element.style.backgroundColor = 'blue';
element.style.color = 'white';
--
2. Adding New Elements:

Creating Elements:

JavaScript
const newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph.';
--
Appending Elements:

JavaScript
const container = document.getElementById('container');
container.appendChild(newElement);
--
Inserting Elements Before Existing Elements:

JavaScript
const existingElement = document.getElementById('existing');
const newElement = document.createElement('div');
container.insertBefore(newElement, existingElement);
--
3. Removing Elements:

Removing Directly:
JavaScript
const elementToRemove = document.getElementById('removeMe');
elementToRemove.parentNode.removeChild(elementToRemove);
--
**Key Points**:

Use appropriate selectors to target specific elements.
Make changes after the DOM is fully loaded.
Consider performance implications for large or frequent DOM manipulations.
Use innerHTML cautiously due to potential security risks.
Always target the correct parent element when appending or inserting.

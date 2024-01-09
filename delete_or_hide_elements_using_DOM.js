Problem Statement) Using the above syntax, do the following

Delete the paragraph with id = 'paragraph3'
Hide the paragraph with id = 'paragraph1'

--------------------------------------------
SOLUTION = // Solution as follows

var removepara = document.getElementById('paragraph3');
document.getElementById('primary').removeChild(removepara);

document.getElementById('paragraph1').hidden = true;

--------
Here's the explanation of the JavaScript code:

1. Deleting Paragraph 3:

Retrieving the Element:
var removepara = document.getElementById('paragraph3'); stores a reference to the paragraph element with the ID 'paragraph3' in the variable removepara.
Accessing the Parent:
document.getElementById('primary') retrieves the parent element (presumably a container element) with the ID 'primary'. This is necessary because elements can only be removed from their parent.
Removing the Element:
.removeChild(removepara) removes the element stored in removepara from its parent element. This effectively deletes the paragraph from the DOM.
2. Hiding Paragraph 1:

Selecting the Element:
document.getElementById('paragraph1') selects the paragraph with the ID 'paragraph1'.
Applying the hidden Property:
.hidden = true; sets the hidden property of the selected element to true, which hides it from view. The element remains in the DOM but is not visible to the user.

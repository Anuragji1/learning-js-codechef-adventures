Problem Statement ) Add the following code to index.js and check what happens.

document.body.innerHTML = '<h2>CodeChef is the best!!!</h2>'; 
What changed?

.innerHTML replaces the contents of the element using HTML elements and given text
Note!!! The HTML content did not change.

-------------------------------------------
SOLUTION = // Solution as follows

document.body.innerHTML = '<h2>CodeChef is the best!!!</h2>'; 

----------
  Explanation:

Targetting the Body:

document.body selects the body element of the HTML document.
Replacing Content:

.innerHTML = '<h2>CodeChef is the best!!!</h2>'; replaces the entire content of the body element with the specified HTML content.
This means all existing content within the body will be removed and replaced with the new h2 element containing the text "CodeChef is the best!!!".
Expected Output:

When this code is executed in a web browser, the entire page content will be replaced with a single heading 2 element displaying the text "CodeChef is the best!!!".

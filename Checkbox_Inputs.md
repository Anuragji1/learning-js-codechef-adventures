If i recall our Project - we will be inserting Tasks into our list along with a checkbox.
The actual addition / removal will be handled by Javascript.
Let us learn how checkboxes are created using HTML.

Checkboxes
Checkboxes are input elements that allow users to select multiple options or mark tasks as complete.
In HTML, checkboxes are created using the <input> tag with the type attribute set to "checkbox".
For example, to create a checkbox, you can use the following HTML code:

<input type="checkbox">
CheckBoxes and Labels
By default, checkboxes do not have labels associated with them.
However, it is recommended to provide labels to improve accessibility and usability.
Labels can be associated with checkboxes using the <label> tag and the for attribute, which should match the id attribute of the corresponding checkbox.
Here's an example of a labeled checkbox:

<input type="checkbox" id="task1">
<label for="task1">Task 1</label>
By incorporating buttons and checkboxes into our To-Do List app, we can enable users to add tasks, mark tasks as complete, or perform other relevant actions. Styling these elements using CSS can further enhance their appearance and provide a cohesive design aesthetic.

-------------------------
Overall Structure:

The HTML code sets up the basic structure of the To-Do List app, including containers for input elements, tasks, and sections for high and low priority tasks.
It includes placeholders for tasks, which will be dynamically added using JavaScript later.
2. Checkbox and Label Addition:

Inside the div with id "highPriorityContainer":
<input type="checkbox" id="task1">: Creates a checkbox for Task 1.
<label for="task1">Task 1</label>: Associates a label with the checkbox, making it clickable and improving accessibility.
Inside the div with id "lowPriorityContainer":
<input type="checkbox" id="task2">: Creates a checkbox for Task 2.
<label for="task2">Task 2</label>: Associates a label with the checkbox.
3. Key Points:

Checkbox Structure: Each checkbox consists of an <input type="checkbox"> tag to create the checkbox element, and a <label> tag to provide a clickable text description for the checkbox.
Linking Checkbox and Label: The for attribute in the <label> tag is set to the id of the corresponding checkbox, linking them together. This ensures that clicking the label toggles the checkbox state.
Task Placeholders: These checkboxes and labels serve as placeholders for how tasks will be displayed. JavaScript will be used to dynamically add and remove tasks as needed.

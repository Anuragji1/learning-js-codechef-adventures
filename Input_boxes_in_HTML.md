The 1st thing we need in our To-do list is the user input field.

The <input> tag in HTML is used to create an input field or control within an HTML form.
It allows users to enter data or make selections depending on the type of input control used.

The <input> tag is an empty element, which means it doesn't have a closing tag.
It can include various attributes to specify the type of input control, define its behavior, and provide additional information.

Here are some common attributes used with the <input> tag:

type: Specifies the type of input control. Examples include text, password, checkbox, radio, number, email, date, etc.
name: Defines the name of the input control. This name is used to reference the input value when the form is submitted.
value: Sets the initial value of the input control.
placeholder: Specifies a short hint or example value that is displayed within the input field before the user enters a value.
required: Indicates that the input field must be filled out before the form can be submitted.
disabled: Disables the input control, preventing the user from interacting with it.
readonly: Makes the input control read-only, meaning the user can see the value but cannot modify it.
maxlength: Sets the maximum number of characters allowed in a text input field.
min and max: Define the minimum and maximum values for number or date inputs.
Sample syntax where the user is required to enter a username before submitting the form.

<input type="text" name="username" placeholder="Enter your username" required>

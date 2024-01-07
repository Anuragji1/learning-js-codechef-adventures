In JavaScript, If-Else statements are used to make decisions in our code based on certain conditions.
They allow us to execute different blocks of code depending on whether a condition is true or false.

The basic structure of If-Else statement
if (condition) {
  // Code to be executed if the condition is true
} else {
  // Code to be executed if the condition is false
}
Explanation
The condition is a logical expression that evaluates to either true or false.
If the condition is true, the code block inside the if statement will be executed.
If the condition is false, the code block inside the else statement (optional) will be executed instead.
Let's understand this with an example
var age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult yet.");
}
In this example, the condition (age >= 18) is evaluated.

If the age variable is greater than or equal to 18, the code block inside the if statement will execute, and it will print "You are an adult."
Otherwise, the code block inside the else statement will execute, and it will print "You are not an adult yet."

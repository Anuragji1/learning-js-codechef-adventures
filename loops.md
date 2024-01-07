In JavaScript, a For loop is used to repeat a block of code for a specific number of times. It allows you to perform repetitive tasks efficiently by providing a way to iterate over a range of values.

The basic structure of a For loop
for (initialization; condition; update) {
  // Code to be executed in each iteration
}
Explanation:
Initialization: It is the starting point of the loop and is executed only once at the beginning. It is typically used to initialize a counter variable.
Condition: It is checked before each iteration. If the condition is true, the code block inside the loop is executed. If the condition is false, the loop terminates.
Update: It is executed after each iteration. It is usually used to update the counter variable.
Example
Let's understand this with an example:

for (var i = 0; i < 5; i++) {
  console.log("Iteration " + (i + 1));
}
In this example, the loop will iterate 5 times.
The i variable is initially set to 0.
The loop will continue as long as i is less than 5.
In each iteration, it will execute the code block and print "Iteration" followed by the value of i + 1.

NOTE: console.log is a function in JS that let's you print in the Console. To see the output, right click anywhere on the website, select inspect elements. A panel will open, this is the Developer's tool. Select the console tab and you will have all the outputs there.

-------------------------------------------------

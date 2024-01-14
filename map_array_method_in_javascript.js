**Map array method in JavaScript**

Statement) The map method in JavaScript is a higher-order array function that allows you to create a new array by transforming each element of an existing array. It executes a provided function once for each element in the array and returns a new array with the results of calling the function on each element.

NOTE: What are Higher-Order Array Functions?
Higher-order array functions in JavaScript are functions that take another function as an argument or return a function.

Syntax
The syntax of the map method can be a bit confusing at first, but it follows a simple structure:

const newArray = array.map((currentValue, index, array) => {
  // Your transformation logic goes here
  return transformedValue;
});
array: The original array on which the map method is called.
currentValue: The current element being processed in the array.
index: The index of the current element being processed.
array: The original array on which the map method is called.
Explanation
The map method is called on an array, and it takes a callback function as an argument. This callback function is executed for each element in the array.

For each element in the array, the map method passes three arguments to the callback function: the current element's value, its index in the array, and the entire array itself.

Inside the callback function, you perform the transformation logic to manipulate the current element and produce the desired result.

The return value of the callback function becomes an element in the new array that map creates.

Once the map method processes all elements in the original array, it returns a new array containing the transformed values.

Example
Let's use a simple example to illustrate the use of map:

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => {
  return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
In this example, we have an array numbers containing some numeric values. We use the map method to create a new array squaredNumbers that contains the squares of each element in the original numbers array.

Task
Now, it's your turn!

Get the index of the elements that are even.
For odd numbers return -1.
Alert the resultant array.

----index.js: // your code goes here
const numbers = [10, 5, 8, 3, 12];

// perform the task using map method

// alert the resultant array

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
SOLUTION = index.js : // Create an array with some numbers
const numbers = [2, 7, 4, 1, 8, 3];

// Use the map method to get the indices of even numbers or -1 for odd numbers
const evenIndicesOrMinusOne = numbers.map((number, index) => {
  // Check if the number is even
  if (number % 2 === 0) {
    // Return the index for even numbers
    return index;
  } else {
    // Return -1 for odd numbers
    return -1;
  }
});

// Alert the resultant array
alert(evenIndicesOrMinusOne); // Output: 0, -1, 2, -1, 4, -1

-------------------------------Explanation:

numbers.map((number, index) => { ... });: Applies the map method to the numbers array, executing the provided function for each element.
if (number % 2 === 0) { ... }: Checks if the current number is even.
return index;: If the number is even, returns its index to be included in the new array.
return -1;: If the number is odd, returns -1 to represent it in the new array.
alert(evenIndicesOrMinusOne);: Displays the resulting array containing indices of even numbers and -1 for odd numbers.
Key Points:

Transformation with map: The map method creates a new array based on transforming elements of an existing array.
Callback Function: The function passed to map receives the current element, its index, and the original array.
Return Value: The return value of the callback function determines the element in the new array.
Even Number Handling: The code specifically filters for even numbers and returns their indices.
Odd Number Handling: For odd numbers, it returns -1 to distinguish them in the result.

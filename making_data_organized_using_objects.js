**Making Data Organized Using Objects**

Statement) Consider a scenario where we need to store information about a student, such as their name, roll number, and class.
One way to achieve this is by using individual variables, like studentName, studentRollNo, and studentClass.

// Using multiple variables
const studentName = "Chef";
const studentRollNo = 12345;
const studentClass = "Grade CC10";
Alternatively, we can employ the concept of objects to represent the student data in a more structured and meaningful way.
By creating an object called student and assigning relevant properties to it, we can encapsulate all the information about the student within a single entity.

// Using an object
const student = {
  name: "Chef",
  rollNo: 12345,
  class: "Grade CC10",
};
Advantages of using Object Oriented Approach
In the object-oriented approach, the properties of the student are represented as key-value pairs within the object. This approach provides several advantages over using multiple variables:

Readability and Maintainability: Objects enhance code readability by clearly indicating the relationship between properties. The intention of storing student-related data becomes explicit, making the code easier to understand and maintain.
Code Organization: Objects allow us to organize related data into a single entity. Instead of scattering variables throughout the code, we have a cohesive unit representing the student, making it simpler to locate and manipulate the data.
Data Manipulation: Objects provide a wide range of methods and techniques for manipulating data. We can easily access and modify specific properties of the student object, making it more flexible and adaptable to changing requirements.
Task
Delete the variables currently defined in index.js.

Convert the above multivariable data into a single Object-Oriented Data.
Name the object as Task, with properties:

description
deadline
done


--index.js=// Delete the following variables
var taskDescription = "This is a task";
var taskDeadLike = "2043-07-13";
var taskDone = false;

const Task = {
    // Complete the Object Declaration with the given value
    
}

-------------------------------------------------------------------------
SOLUTION = index.js = // Create a Task object with the specified properties
const Task = {
  description: "",  // Replace with actual task description
  deadline: "",     // Replace with actual task deadline
  done: false       // Initialize as not done
};

--------Explanation:

Object creation: An object named Task is created using object literal syntax.
Properties: The object has three properties:
description: A string to hold the task's description.
deadline: A string to store the task's deadline.
done: A boolean value indicating whether the task is completed (initially set to false).
Benefits of this approach:

Organization: The related task data is now encapsulated within a single object, improving code clarity and organization.
Readability: The object structure makes it easier to understand the relationships between properties and the purpose of the data.
Flexibility: You can easily add, remove, or modify properties as needed to represent additional task information.
Data manipulation: You can access and modify specific properties of the task object using dot notation (e.g., Task.description = "New task description";).
Remember: Replace the empty string values for description and deadline with actual task-specific data when you use this Task object in your application.

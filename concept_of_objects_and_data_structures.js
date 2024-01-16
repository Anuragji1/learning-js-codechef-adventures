**Concept of Objects and Data Structures**

Statement) In the previous module - we updated our project to add tasks to specific containers based on their deadline.
However, we could not delete or strike out specific tasks.
Why is that?

Until now, we have stored data using individual variables, like content1Description, content1Date, and content1Deadline.

While this approach works, it can become cumbersome and hard to manage when dealing with multiple entities or tasks.
Until now we have just been using the variables to get the data from the user and representing in the DOM. But we aren't storing them anywhere apart from the DOM.
To address this issue, there are two fundamental concepts that can greatly enhance the organisation and efficiency of our code:

Objects
Data Structures

-----------------------
Objects:

Key-value pairs: Objects store data as collections of key-value pairs, where each key is a unique identifier (usually a string) and each value can be any data type (number, string, boolean, array, even another object).
Creating objects:
Object literal syntax: const task = { description: "Review notes", date: "2024-01-11", deadline: "Today" };
Constructor function: const task = new Object(); task.description = "Study chapter 5";
Accessing properties: const taskDescription = task.description;
Organizing related data: Objects effectively group related data together, making it easier to manage and work with.
Data Structures:

Arranging data: Data structures define ways to organize and manage data efficiently for specific purposes.
Common types in JavaScript:
Arrays: Ordered lists of elements (const tasks = [task1, task2, task3];)
Objects: Unordered collections of key-value pairs (as discussed above)
Sets: Collections of unique values (const uniqueDates = new Set(["2024-01-10", "2024-01-12"]);)
Maps: Similar to objects, but keys can be of any data type (const taskMap = new Map([ [1, task1], [2, task2] ]);)
Benefits of Using Objects and Data Structures for Tasks:

Grouping related information: Store all task-related data (description, date, deadline, status) within a single object, making it easier to manipulate and track.
Managing multiple tasks: Data structures like arrays or objects can hold multiple tasks, allowing for efficient storage, retrieval, and operations like deletion or marking as complete.
Encapsulation: Objects encapsulate data and behavior, promoting code modularity and reusability.
Code clarity: Using objects and data structures often leads to more readable and maintainable code, as it clarifies relationships between data elements.
In the context of the to-do list application, using objects and data structures would enable features like deletion and marking tasks as complete by directly modifying the task objects within appropriate data structures.

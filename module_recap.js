**Module recap**

Statement) What did we learn in this module?

How to treat 'task' entries as an array
How to add and delete entries from an array
How to display entries in the Array on our webpage using DOM
Using Object oriented programming to improve code structure
Let's look at where we left our project.
In the next module - we will incorporate our current learning into the project.

----------------------------------------------------------------------------------
SOLUTION = 
----index.html = <html>
    <head>
        <title>To-Do List App</title>
    </head>
    
    <body>
        <div class = "container">
            <h1>To-do List</h1>
                <div class="input-container">
                    <input type="text" id="taskInput" placeholder="Enter task..." />
                    <input type="date" id="deadlineInput" placeholder="" />
                    <button id="addButton">Add</button>
                </div>
                
                <!-- Solution as follows -->
                <div id="todoList">
                    High Priority Tasks:
                    <div id="highPriorityContainer"></div>

                    Low Priority Tasks:
                    <div id="lowPriorityContainer"></div>
                    
                    <button id="delButton">Delete task</button>
                    <button id="strikeButton">Strike task</button>
                </div>

        </div>
    </body>
</html>

----style.css = /* Solution as follows */
#highPriorityContainer, #lowPriorityContainer {
    border-radius: 5px;
    height: 200px;
    width: 90%;
    margin: 10px auto;
    padding: 10px;
}

#highPriorityContainer {
    border: 3px solid red;
}

#lowPriorityContainer {
    border: 3px solid brown;  
}

.input-container {
    display: flex;
}

.input-container input {
    flex-grow: 1;
    padding: 10px;
    border-radius: 10px;
    font-size: 16px;
}

.input-container button {
    background-color: #4caf50;
    color: #fff;
    border-radius: 3px;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

#delButton, #strikeButton {
    background-color: #4caf50;
    color: #fff;
    border-radius: 3px;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.todo-list {
  margin-top: 20px;
}

h1 {
  text-align: center;
  margin-top: 0;    
}

.container {
  max-width: 550px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f7f7f7;
  margin: 0;
  padding: 0;
}

body:before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right bottom,
    #ff7171,
    #ff5468,
    #ff3380,
    #fe1a9f,
    #fe01c3
  );
  pointer-events: none;
  z-index: -1;
}

-----index.js= // Solution as follows
var strikeButton = document.getElementById("strikeButton");

strikeButton.addEventListener("click", () => {
    var highstrike = document.getElementById('highPriorityContainer');
    highstrike.style.textDecoration = "line-through";
    var lowstrike = document.getElementById('lowPriorityContainer');
    lowstrike.style.textDecoration = "line-through";
})


// Dont change the code below this line
const textInput = document.getElementById("taskInput");
const submitButton = document.getElementById("addButton");
const dateInput = document.getElementById("deadlineInput");

submitButton.addEventListener("click", () => {
  const content1Description = textInput.value;
  const content1Date = dateInput.value;
  displayContents(content1Description, content1Date);
});

var content1Date = "2023-07-31";

var currentDate = new Date();

function displayContents(contentDescription, contentDate) {
  if (new Date(contentDate) <= currentDate.getTime()) {
      /* Solution as follows */
      var container1 = document.getElementById("highPriorityContainer");
      var contentItem1 = createContentElement(contentDescription, contentDate);      
      highPriorityContainer.appendChild(contentItem1);
  } else {
      var container2 = document.getElementById("lowPriorityContainer");
      var contentItem2 = createContentElement(contentDescription, contentDate);
      lowPriorityContainer.appendChild(contentItem2);
  }
}

function createContentElement(description, date) {
  var contentItem = document.createElement("div");

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  var label = document.createElement("label");
  label.innerHTML = description + " (Target date: " + date + ")";

  contentItem.appendChild(checkbox);
  contentItem.appendChild(label);

  return contentItem;
}

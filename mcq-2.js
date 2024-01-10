Statement) How will you append an <li> element with content 'Third line' to the existing ordered list with id 'list'.

HTML code

<body>
  <h1>CodeChef</h1>
  <div id = "primary">
	<h2>
	    Practical learning platform
	</h2>
	<ol id = "list">
	    <li>First line</li>
	    <li>Second line</li>
	</ol>
   </div>
</body>

Rearrange the following code
document.getElementById('list').appendChild(newline);
let newline = document.createElement('li');
newline.innerHTML = 'Third line';

-----------------------------------------------------------
SOLUTION = let newline = document.createElement('li');
newline.innerHTML = 'Third line';
document.getElementById('list').appendChild(newline);
Explanation:
1. let newline = document.createElement('li');
This create a new variable of type 'li'

2. newline.innerHTML = 'Third line';
This assigns content to the variable 'newline'

3. document.getElementById('list').appendChild(newline);
This appends the child newline to the original id - 'list'

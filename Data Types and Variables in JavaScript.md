Data Types in JavaScript:
JavaScript has 8 built-in data types that represent different kinds of values.
Here are the common data types in JavaScript:

Data Type	Example	Definition
String	"Hello World"	A sequence of characters enclosed in single or double quotes.
Number	10, 3.14	Represents numeric values, including integers and decimals.
Bigint	BigInt(9007199254740991)	Stores integers larger than the maximum safe value for Number.
Boolean	true, false	Represents logical values of true or false.
Undefined	undefined	Indicates a variable that has been declared but not assigned a value.
Null	null	Represents the intentional absence of any object value.
Symbol	Symbol("example")	Represents a unique identifier used as object property keys.
Object	{ key: "value" }	A collection of key-value pairs or properties.
Declaring Variables with data types:
Variables are used to store and manipulate data in JavaScript.
To declare a variable, we use the var, let, or const keywords, followed by the variable name.

var: It was the traditional way to declare variables before ES6 (ECMAScript 2015) introduced let and const. Variables declared with var are function-scoped and can be redeclared within the same scope.

const: It declares a constant variable that cannot be reassigned after initialization. It has block-level scope and is commonly used for values that should not change throughout the program.

let: It declares a block-scoped variable that can be reassigned. Unlike var, let respects block scope, meaning it is confined to the block in which it's declared.

let x=10;
let y="Hello";

var a="YES!";
a = "NO!"; //You can change the value of a `var` and `let` type.

const pi=3.14 //You cannot change the value of a `const` type.
You don't see String or Integer type right?
This leads to the concept of dynamic data types in JavaScript.
We can use the same variable for storing different types of data.
Something similar to Python, where data types are assigned depending on the type of data stored.

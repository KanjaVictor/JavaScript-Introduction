//---CHEAT SHEET 1.0---

//LESSON 1
//There are two ways to write comments:

//(1).In-line comment

/*(2).Multi-line
comment*/


//LESSON 2
//Declaring JavaScript Variables
//Variables can store different values at different times.
//Variables can be made up of numbers, letters and $ or _ but may not start with a number.

//Data types

/*
  Undefined
  Null
  Boolean
  String
  Symbol
  Bigint
  Number
  Float
  Object

*/


//LESSON 3

//(1).Storing values with the assignment operator.
//Assignment Operator(=)
var exampleVar;
exampleVar = 75;

//(2).Initializing Variables with the assignment operator
var myVar = "Initializing Variables";
/*
Uninitialized variables have an initial value of undefined.
->If you do a mathematical operation on an undefined variable your results will be NaN..."Not a Number"
->If you concatenate a string with an undefined variable your result will be "undefined".
*/


//LESSON 4

/*
->Variables and Function names are case sensitive
Best Practice: Write variableNames in camelCase.
*/


//LESSON 5

//1.Arithmetic operators :integers and floats ,numeric.

/*
#Addition : +
#Subtraction : -
#Multiplication : *
#Division : /
#Remainder: % (Also known as Modulus operator)
#Exponential : **

#Increment : ++
#Decrement : --
*/

//2.Assignment operators.

/*

( += )
( -= )
( *= )
( /= )

*/


//LESSON 6

//Declaring string variables
var varName = "Your Name";
//"Your Name" is a string literal.

//Escaping literal quotes, Done by placing a backslash infront of the quote to be skipped.
var exampleString = "\"Hello World!\"";

/*
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
*/

//Concatenating strings with the plus operator.

//Appending Variables to Strings.
var strOne = "Hello";
var strTwo = "World!";
strOne += strTwo;
//strOne is now "Hello World!", strOne is appended to strTwo.

//Finding string length.By using the .length property
var townName = "Nairobi";
townName.length;

//Finding the first character in a string string using bracket notation
var firstName = "John";
var firstChar = firstName[0];

//Finding the last character in a string using bracket notation
var lastName = "Doe";
var lastChar = lastName[lastName.length - 1];
//String Immutability
/*
String values are immutable.They cannot be altered once they're created.
The only way to change would be to assign a new string.
*/

var immutableStr = "Bob";
//Error
immutableStr[0] ="J";
//Correct method
immutableStr = "Job";


//LESSON 7
//Using JavaScript Arrays.

//Basic Array
var exampleArray = ["Happy", 1, "Hacking", "Hello World", "Code"];
//Nested Array,(Also known as a multi-dimensional array)
var nestedArray = [["Bulls", 23], ["Ronaldo", 7]];

//Accessing array data using Indexes.
exampleArray[3];//If you use an index that is not within range you'll get undefined.
//Accessing multi-dimensional array data using Indexes.
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var accessData = myArray[2][1];
//Number Accessed will be 8.

//Modifying array data using Indexes.
exampleArray[1] = "Developer";

//Manipulate Arrays
//Adding with unshift() function -->Adding at the beginning of the array.
var unshiftArr = ["X","Y","Z"];
unshiftArr.unshift("XYZ");
//Adding with push() function -->Adding at the end of an array.
var pushArr = [1,2,3];
pushArr.push(4);


//Removing with shift() function -->Removes the first element.
var shiftArr = ["A","B","C","D","E"];
shiftArr.shift();
//Removing with pop() function--> Removes the last element.
var popArr = [5,6,7,8,9];
popArr.pop();


//LESSON 8
//Writing functions
function functionName(){
  console.log("Hello World");
}
//Invoking or calling the function.
functionName();

//Passing vaalues to functions with arguments.
/*
function functionParam(param1, param2){
  console.log(param1, param2);
}
//Invoking or calling the function.
functionParam("Hello","World");
*/

function funAddition(num1, num2){
  console.log(num1 + num2);
}
funAddition(2,2);

//Global Scope, Local Scope, and Functions.
/*
Scope->Visibilty of variables.
Variables defined outside a function block have a global scope.
Variables declared inside a function block has a local scope.Outside the function it's undefined.
*/

//Return
function threeAddition(num){
  return num + 3;
}
var answer = threeAddition(7);

//Queue -->An abstract data structure where items are kept in order.
function nextInLine(arr[], item){
  arr[].push(item);
  item = arr[].shift();
  return item;
}

//Boolean values -->Can only be two values:True "on" or False "off".

//--Conditional(Ternary) Operator--
//The syntax:
condition ? expression-if-true : expression-if-false;

//Example
function checkEqual(a, b) {
    var status = a == b ? "Equal": "Not Equal";
    console.log(status);
}

checkEqual(1, 2);

//--Multiple Conditional(Ternary) Operator--
//Example
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" //if
    : (a > b) ? "a is greater"//else if
    : "b is greater";//else
}

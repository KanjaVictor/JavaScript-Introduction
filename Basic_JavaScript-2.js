//---CHEAT SHEET 2.0---

//LOOPS

//IF Statements

if(condition is true){
  statement is executed
}
//The conditions are known as Boolean conditions.


//Equality Operator( == )
/*
The equality operator compares two values
and returns true if they're equivalent or false if they are not.

Can compare different data types: Strings and integers.
Done through coercion.The data type is converted to one of the data types and then a comparison is made.
*/

//Strict Equality Operator( === )
/*
Unlike the equality counterpart, no conversion is performed.
If different data types are used they're considered unequal.
*/

//Inequality Operator ( != )

//Strict Inequality Operator( !== )

//Greater than Operator( > )

//Greater than or Equal to Operator( >= )

//Less than Operator( < )

//Less tnan of Equal to Operator( <= )

//Logical (And) Operator( && )

//Logical (Or) Operator( || )

//If Statements
if (true) {
  //Run block of code here
}

//Else Statements
if (true) {
  //Run block of code here
}else {
  //If false: run block of code here
}

//Else If Statements
if (true) {
  //Run block of code here
}else if (true) {
  //If (if) was false: Run block of code here
}else {
  //If all of the above are false: Run block of code here
}
//Logical order of the Statements
function testFn(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}

//Chaining If Else Statements --Psuedocode of multiple chained if/else if statements
if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

//Example
Golf Code
/*Strokes -	Return
1	 - "Hole-in-one!"
<= par - 2  -	"Eagle"
par - 1	 - "Birdie"
par	 - "Par"
par + 1 - "Bogey"
par + 2	 - "Double Bogey"
>= par + 3 - "Go Home!"*/
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1){
    return names[0];
  }else if(strokes <= par - 2){
    return names[1];
  }else if(strokes == par - 1){
    return names[2];
  }else if(strokes == par){
    return names[3];
  }else if(strokes == par + 1){
    return names[4];
  }else if(strokes == par + 2){
    return names[5];
  }else if(strokes >= par + 3){
    return names[6];
  }else{
    return "Change Me";
  }
}

golfScore(5, 4);


//Switch statements
/*
case values are tested with strict equality (===).
The break tells JavaScript to stop executing statements.
If the break is omitted, the next statement will be executed.
*/
switch (expression) {
  case expression:
    statement1;
    break;
  case expression:
   statement2;
   break;
  default:
   defaultStatement;
   break;
}
//Example
function caseInSwitch(val) {
  var answer = "";
  switch(val){
    case 1:
      answer = "alpha";
      console.log(answer);
      break;
    case 2:
      answer = "beta";
      console.log(answer);
      break;
    case 3:
      answer = "gamma";
      console.log(answer);
      break;
    case 4:
      answer = "delta";
      console.log(answer);
      break;
    default:
      answer = "Not an Option";
      console.log(answer);
      break;
      }
    return answer;
}
caseInSwitch(5);

//--Iterate with JavaScript While Loops--
while (true) {
  statement to be executed;
}
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

//(1)--Iterate with JavaScript For Loops--
//Can run the same code multiple times by using a loop.
for ([initialExpression]; [conditionExpression]; [incrementExpression]){
  statement to be executed;
}
//Example
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

//(2)--Iterate through an array with a For Loop
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

//(3)--Iterate through using a nested For Loop
function multiplyAll(arr) {
  var product = 1;
    for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}
multiplyAll([[1,2],[3,4],[5,6,7]]);

//--Iterate with JavaScript Do...While Loop
/*
First do one pass of the code inside the loop no matter what,
and then continue to run the loop while the specified condition evaluates to true.
*/
do {

} while (true);

//--Replace Loops using Recursion--
//Recursion is the concept that a function can be expressed in terms of itself.
//Example
function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
//multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]

//--Computation in Js--
parseInt();
/*
The parseInt() function parses a string and returns an integer.
It takes a second argument for the radix, which specifies the base of the number in the string.
The radix can be an integer between 2 and 36.
*/
parseInt(string, radix);
//Example
var a = parseInt("11", 2);
/*
The radix variable says that "11" is in the binary system, or base 2.
This example converts the string "11" to an integer 3.
*/

//--Use Recursion to Create a Countdown--
/*
For example, say you want to write a recursive function that returns an array containing the numbers 1 through n.
This function will need to accept an argument, n, representing the final number.
Then it will need to call itself with progressively smaller values of n until it reaches 1.
You could write the function as follows:
*/
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

//Countdown example
function countdown(n){
  if(n < 1){
    return [];
  } else{
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}
console.log(countdown(5)); //[ 5, 4, 3, 2, 1 ]

//--Use Recursion to create a Range of Numbers--
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

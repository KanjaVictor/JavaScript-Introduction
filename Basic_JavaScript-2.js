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
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "Not an Option";
      break;
      }
    return answer;
}
caseInSwitch(1);

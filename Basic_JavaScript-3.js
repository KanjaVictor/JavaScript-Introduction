//---CHEAT SHEET 3.0---

//--Building JavaScript Objects--
/*
Objects are similar to arrays except we don't access and modify their data using Indexes
We use properties.
You will need to place a comma after every object in the array,
unless it is the last object in the array.
*/
var objectExample = {
    //Object Property: Object Value
    //Key   :  Value
      "name":"value",
      name2:"value2",
      2:["Three", 4]
};

//--Accessing Object Properties--
/*
There are two ways to access the properties of an object:
1)Dot Notation(.)
2)Bracket Notation([])
*/
//Object.

var institutionObj = {
  school: "AHS",
  "national hospital": "KNH",
  stadium: "Johan Cruijff ArenA"
};
//1)Using Dot Notation.
var schoolValue = institutionObj.school;
var stadiumValue = institutionObj.stadium;

//2)Bracket Notation.
/*
Used if the property of the object being accessed has a space in its name.
The Property name with spaces in them must be in quotes(single or double).
*/
institutionObj["national hospital"];

//Accessing  Object Properties with variables.
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
console.log(someObj[someProp]); // "John"
//No quotes are placed around variable name since we are using the value of the variable.

//--Updating Object Properties--
institutionObj["national hospital"] = "Moi Teaching and Referral Hospital";
//or
institutionObj.school = "UoN";

//--Adding New Properties to a Js Object--
institutionObj.hotel = "Villa Rosa Kempinski";
//or
institutionObj["hotel"] =  "Villa Rosa Kempinski";

//--Delete Properties to a Js Object--
delete institutionObj.hotel;

//--Using Objects for Lookups--
function phoneticLookup(val) {
  var result = "";
  var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
  result = lookup[val];
  return result;
}
phoneticLookup("charlie");

//--Testing Objects for Properties--
/*
We check if a property exists or not using .hasOwnProperty(propName) method.
It returns true or false, if the property is found or not.
*/
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
//or
function checkObj(obj, checkProp){
  if(obj.hasOwnProperty(checkProp)) {
   return obj[checkProp];
 } else {
   return "Not Found";
 }
}

//--Manipulating Complex Objects--
/*
Used to store data in a flexible Data Structure.
*/
//Complex Data Structure Example.
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [
      "CD",
      "Cassette",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
/*
An array which contains one object inside.
The object has various pieces of metadata about an album.
There's also a nested array "formats".
JSON-> JavaScript Object Notation.
*/

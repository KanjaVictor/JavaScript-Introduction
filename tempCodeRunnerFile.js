var arr = []; //An empty array.
var item = "C";

function nextInLine(arr,item){
    arr.push(item);//Adds an element to the END of the array. To add at the START of the list use unshift().

    item = arr.shift();//Removes the FIRST element in the array. To remove the LAST element use pop().

    if(arr){
        arr.length == 0;                    //Trying to add conditions.
        arr = ["a", 1, "b", 2];
    }

    return item;
  }

nextInLine(arr, item); //Calling the function.

console.log(arr);//print out.

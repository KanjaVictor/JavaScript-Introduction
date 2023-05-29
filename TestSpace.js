
//var arr =["A", 1, "B", 2];

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



/*
Created a function and tested the ability to call a function with return.
If the return keyword is not present the function returns undefined. -> The function execution is not ended
*/
function threeAddition(num){

    return num + 3;//Output 7

   /*  var x =num;
    x++;                This was also used to test if the code was written differently whether it would give a value without the return keyword.
                        Output was undefined without return, return num; = 7, return x; = 8.
    return x; */        
  }
  
console.log(threeAddition(7))
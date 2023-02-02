// Array.prototype.toString()
// The toString() method returns a string representing the specified array and its elements. 

// const array1 = [1, 2, 'a', '1a'];
// // console.log(typeof array1);

// console.log(array1.toString());    //"1,2,a,1a"
// // console.log(typeof array1.toString());
// console.log(array1);   //array  [1, 2, 'a', '1a']; 

// expected output: "1,2,a,1a"


// Return value
// A string representing the elements of the array.

// Description
// The Array object overrides the toString method of Object. The toString method of arrays calls join() internally, which joins the array and returns one string containing each array element separated by commas. If the join method is unavailable or is not a function, Object.prototype.toString is used instead, returning [object Array].

const arr = [];
arr.join = 1; // re-assign `join` with a non-function
console.log(arr.toString()); // Logs [object Array]

// console.log(Array.prototype.toString.call({ join: () => 1 }));  // Logs 1

// JavaScript calls the toString method automatically when an array is to be represented as a text value or when an array is referred to in a string concatenation.

// Examples
// Using toString

const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());
// expected output: "1,2,a,1a"

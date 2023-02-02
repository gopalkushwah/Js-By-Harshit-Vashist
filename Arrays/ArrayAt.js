// Array.prototype.at()
// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

// This is not to suggest there is anything wrong with using the square bracket notation. For example array[0] would return the first item. However instead of using array.length for latter items; e.g. array[array.length-1] for the last item, you can call array.at(-1)

////Syntax
//// at(index)

// const array1 = [5, 12, 8, 130, 44];

// let index = 2;

// console.log(`Using an index of ${index} the item returned is ${array1.at(index)}`);
// expected output: "Using an index of 2 the item returned is 8"

// index = -2;

// console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"

// Our array with items
const cart = ['apple', 'banana', 'pear'];

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

// // Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // Logs: 'pear'

// // Add an item to our 'cart' array
// cart.push('orange');
// const item2 = returnLast(cart);
// console.log(item2); // Logs: 'orange'
// // Copy to Clipboard
// // Comparing methods
// // This example compares different ways to select the penultimate (last but one) item of an Array. While all the methods shown below are valid, this example highlights the succinctness and readability of the at() method.

// // Our array with items
// const colors = ['red', 'green', 'blue'];

// // Using length property
// const lengthWay = colors[colors.length-2];
// console.log(lengthWay); // Logs: 'green'

// // Using slice() method. Note an array is returned
// const sliceWay = colors.slice(-2, -1);
// console.log(sliceWay[0]); // Logs: 'green'

// // Using at() method
// const atWay = colors.at(-2);
// console.log(atWay); // Logs: 'green'


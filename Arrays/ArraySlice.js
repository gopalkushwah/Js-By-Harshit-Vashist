// Array.prototype.slice()
// it dosnt affect the original array . it just make a copy of array
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. 

// Syntax

// slice()
// slice(start)
// slice(start, end)

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//                 // 0      1        2       3         4
// console.log(animals.slice(2));  // expected output: Array ["camel", "duck", "elephant"]  
// // console.log(animals);  //original array  ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2, 4));       //range will we n-1===> 4-1 = 3  // index number 2 and 3 will be sliced from array
// // // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// ['ant', 'bison', 'camel', 'duck', 'elephant'];
//   -5     -4       -3       -2        -1
// console.log(animals.slice(-2));    // if we will enter negative value in slice parameter , the index counting will we started from the end index of array
// // expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice());
// // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// Parameters

// start Optional
//     Zero-based index at which to start extraction.
//     A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
//     If start is undefined, slice starts from the index 0.
//     If start is greater than the index range of the sequence, an empty array is returned.

// end Optional
//     The index of the first element to exclude from the returned array. slice extracts up to but not including end. For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).
//     A negative index can be used, indicating an offset from the end of the sequence. slice(2,-1) extracts the third element through the second-to-last element in the sequence.
//     If end is omitted, slice extracts through the end of the sequence (arr.length).
//     If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).

// Return value
// A new array containing the extracted elements.

// Description
// slice does not alter the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array as follows:
//     For objects, slice copies object references into the new array. Both the original and new array refer to the same object. If an object changes, the changes are visible to both the new and original arrays.
//     For strings, numbers and booleans (not String, Number and Boolean objects), slice copies the values into the new array. Changes to the string, number, or boolean in one array do not affect the other array.

// If a new element is added to either array, the other array is not affected.
// Examples
// Return a portion of an existing array

// const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// const citrus = fruits.slice(1, 3);


// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

// ------------------------------------------------------------------------------------------------------------------------------------

// Using slice

// In the following example, slice creates a new array, newCar, from myCar. Both include a reference to the object myHonda. When the color of myHonda is changed to purple, both arrays reflect the change.

// Using slice, create newCar from myCar.
const myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
const myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
const newCar = myCar.slice(0, 2);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ', myCar);
console.log('newCar = ', newCar);
console.log('myCar[0].color = ', myCar[0].color);
console.log('newCar[0].color = ', newCar[0].color);

// Change the color of myHonda.
// myHonda.color = 'purple';
// console.log('The new color of my Honda is ', myHonda.color);

// // Display the color of myHonda referenced from both arrays.
// console.log('myCar[0].color = ', myCar[0].color);
// console.log('newCar[0].color = ', newCar[0].color);

// // This script writes:

// myCar = [
//   { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
//   2,
//   'cherry condition',
//   'purchased 1997'
// ]
// newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
// myCar[0].color = red
// newCar[0].color = red
// // The new color of my Honda is purple
// myCar[0].color = purple
// newCar[0].color = purple

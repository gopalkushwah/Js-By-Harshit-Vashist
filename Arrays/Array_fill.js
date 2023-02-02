// Array.prototype.fill()
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.

// Syntax
// fill(value)
// fill(value, start)
// fill(value, start, end)

//              0  1  2  3    index
// const array1 = [1, 2, 3, 4,5,6,7,8,9];

// fill with 0 from position 2 until position 4
// console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0, 5,6, 7, 8, 9]
// console.log(array1);

// fill with 5 from position 1
// console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5,5,5,5,5,5]

// console.log(array1.fill(6));
// expected output: [6, 6, 6, 6,6,6,6,6,6,6]


// Parameters
// value
// Value to fill the array with. (Note all elements in the array will be this exact value.)

// start Optional
// Start index (inclusive), default 0.

// end Optional
// End index (exclusive), default arr.length.

// Return value
// The modified array, filled with value.

// Description
// If start is negative, it is treated as array.length + start.
// If end is negative, it is treated as array.length + end.
// fill is intentionally generic: it does not require that its this value be an Array object.
// fill is a mutator method: it will change the array itself and return it, not a copy of it.
// If the first parameter is an object, each slot in the array will reference that object.
// The fill() method is a mutating method. It does not alter the length of this, but it will change the content of this.

// The fill() method fills empty slots in sparse arrays with value as well.

// Note: Using Array.prototype.fill() on an empty array (length = 0) would not modify it as the array has nothing to be modified. To use Array.prototype.fill() when declaring an array, make sure the array has non-zero length. See example.

// Examples
// Using fill
// console.log([1, 2, 3].fill(4));                // [4, 4, 4]
// console.log([1, 2, 3].fill(4, 1));             // [1, 4, 4]
// console.log([1, 2, 3].fill(4, 1, 2));          // [1, 4, 3]
// console.log([1, 2, 3].fill(4, 1, 1));          // [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 3));          // [1, 2, 3]
// console.log([1, 2, 3].fill(4, -3, -2));        // [4, 2, 3]         length = 3 ,start => 3+(-3)=0    end=> 3+(-2) = 1    
// console.log([1, 2, 3].fill(4, 0, 1));        // [4, 2, 3]          
// console.log([1, 2, 3].fill(4, NaN, NaN));      // [1, 2, 3]
// console.log([1, 2, 3].fill(4, 3, 5));          // [1, 2, 3]
// console.log(Array(3).fill(4));                 // [4, 4, 4]     //3 will be the length of array and it will repeat 4 for 3 times
// console.log([].fill.call({ length: 3 }, 4));   // {0: 4, 1: 4, 2: 4, length: 3}     // this method also returns indexing with values

// A single object, referenced by each slot of the array:
// const arr = Array(3).fill({}); // [{}, {}, {}]
// arr[0].hi = "hi";              // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]


// Using fill() to create a matrix of all 1
// This example shows how to create a matrix of all 1, like the ones() function of Octave or MATLAB.

// const arr = new Array(3);
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
// }
// arr[0][0] = 10;
// console.log(arr[0][0]); // 10
// console.log(arr[1][0]); // 1
// console.log(arr[2][0]); // 1
// Copy to Clipboard
// Using fill() to populate an empty array
// This example shows how to populate an array, setting all elements to a specific value. The end parameter does not have to be specified.

// const tempGirls = Array(5).fill("girl", 0);
// Copy to Clipboard
// Note that the array was initially a sparse array with no assigned indices. fill() is still able to fill this array.
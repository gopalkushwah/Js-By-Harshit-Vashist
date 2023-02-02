// // Array.prototype.length

// // The length property of an object which is an instance of type Array sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

// let fruits = ['banana','mango','apple','orange'];
// let fruitslength = fruits.length;
// console.log(fruitslength);


// Description

// The value of the length property is an integer with a positive sign and a value less than 2 to the 32nd power (2^32).

// const listA = [1,2,3];
// const listB = new Array(6);

// console.log(listA.length);
// // 3

// console.log(listB.length);
// 6

// listB.length = 4294967296; //2 to the 32nd power = 4294967296
// RangeError: Invalid array length

// const listC = new Array(-100) //negative sign
// RangeError: Invalid array length

// // You can set the length property to truncate an array at any time. When you extend an array by changing its length property, the number of actual elements increases; for example, if you set length to 3 when it is currently 2, the array now contains 3 elements, which causes the third element to be a non-iterable empty slot.

// const arr = [1, 2];
// console.log(arr);
// // [ 1, 2 ]

// arr.length = 5; // set array length to 5 while currently 2.
// console.log(arr);
// // [ 1, 2, <3 empty items> ]

// arr.forEach((element) => console.log(element));
// // 1
// // 2

// // As you can see, the length property does not necessarily indicate the number of defined values in the array. See also Relationship between length and numerical properties.
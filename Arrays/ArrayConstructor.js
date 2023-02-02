// JavaScript Array constructor
// The Array() constructor is used to create Array objects.

// let arr = ['gopal','is','a','good','boy'];
// let result = arr.constructor();
// console.log(result);

// -------------------------------------------------------------------------
// learn more 
// Arrays/Array() constructor - JavaScript _ MDN.pdf
// -------------------------------------------------------------------------
// new Array(element0, element1, /* … ,*/ elementN)
// new Array(arrayLength)

// Array(element0, element1, /* … ,*/ elementN)
// Array(arrayLength)

// Note: Array() can be called with or without new . Both create a new Array instance.

// Parameters : 

// elementN 
// A javascript array is initialized with the given elements , except in the case where a single argument is passed to the Array constructor and that argument is a number (see the arrayLength parameter below) note that this special case only applies to javascript arrays created with the Array constructor not array literals created with the bracket Syntax .

// arrayLength 
// if the only argument passed to the Array constructor is an integer between 0 and (2^32)-1(inclusive),this returns a new javascript array with its length property set to that number (Note: this implies an array of arrayLength empty slots , not slots with actual undefined valus)


// // Examples : 
// Array literal notation 
// Arrays can be crated usin the literal notation

// let fruits = ['apple', 'banana'];
// console.log(fruits.length);
// console.log(fruits);

// Array constructor with a single parameter 
// Array can be created using a constructor with a single number parameter. An array with its length property set to that number and the array elements are empty slots . 

// let animal =Array(3);
// console.log(animal.length);
// console.log(animal);

// let animal = new Array(3);
// console.log(animal.length);
// console.log(animal);


// let animal = Array('cow','bull');
// console.log(animal.length);
// console.log(animal);


// let animal = new Array('cow','bull');
// console.log(animal.length);
// console.log(animal);






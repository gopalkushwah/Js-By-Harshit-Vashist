// Array.from()

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

// The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.

// Syntax
// // Arrow function
// Array.from(arrayLike, (element) => { /* … */ } )
// Array.from(arrayLike, (element, index) => { /* … */ } )

// // Mapping function
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)

// // Inline mapping function
// Array.from(arrayLike, function mapFn(element) { /* … */ })
// Array.from(arrayLike, function mapFn(element, index) { /* … */ })
// Array.from(arrayLike, function mapFn(element) { /* … */ }, thisArg)
// Array.from(arrayLike, function mapFn(element, index) { /* … */ }, thisArg)

// arrayLike
// An iterable or array-like object to convert to an array.

// mapFn Optional
// Map function to call on every element of the array.

// thisArg Optional
// Value to use as this when executing mapFn.


// console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]


// const arr = Array.from([1, 2, 3], x => x + x);
// console.log(arr);

// const arr = Array.from('12345', (x) => Number(x) + Number(x));
// console.log(arr);
// expected output: Array [2, 4, 6, 8, 10]


// -----------------------------------------------------------------------------------------------
// Set
// The Set object lets you store unique values of any type, whether primitive values or object references.
// const set = new Set(['foo', 'bar', 'baz', 'foo',2,true,62,{a:2,b:3}]);
// console.log(set);
// // [ "foo", "bar", "baz" ]

// // methods which can be used with the SET 
// set.add('gopal');
// console.log(set);

// // set.clear();
// // console.log(Array.from(set));

// set.delete(2);
// console.log(set);


// console.log(set.has('foo'));
// -----------------------------------------------------------------------------------------------

// // Sequence generator (range)
// // Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP, etc.)
// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
//                                                             //5
// // Generate numbers range 0..4
// console.log(range(0, 4, 1));
// // [0, 1, 2, 3, 4]

// // Generate numbers range 1..10 with step of 2
// range(1, 10, 2);
// // [1, 3, 5, 7, 9]

// // Generate the alphabet using Array.from making use of it being ordered as a sequence
// console.log(range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) => String.fromCharCode(x)));
// // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// -----------------------------------------------------------------------------------------------
// Calling from() on non-array constructors
// The from() method can be called on any constructor function that accepts a single argument representing the length of the new array.

// function NotArray(len) {
//   console.log("NotArray called with length", len);
// }

// // Iterable
// // console.log(Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
// // NotArray called with length undefined
// // NotArray { '0': 'foo', '1': 'bar', '2': 'baz', length: 3 }

// // Array-like
// console.log(Array.from.call(NotArray, { length: 1, 0: "foo" }));
// // NotArray called with length 1
// // NotArray { '0': 'foo', length: 1 }



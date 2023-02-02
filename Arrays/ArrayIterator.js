// Array.prototype[@@iterator]()

// The @@iterator method of an Array object implements the iterable protocol and allows arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an iterator that yields the value of each index in the array.

// The initial value of this property is the same function object as the initial value of the Array.prototype.values property.

// Syntax :- array[Symbol.iterator]()

// Return value
// The same return value as Array.prototype.values(): a new iterable iterator object that yields the value of each index in the array.


// Manually hand-rolling the iterator:-
// You may still manually call the next() method of the returned iterator object to achieve maximum control over the iteration process.
// const arr = ["a", "b", "c", "d", "e"];
// const arrIter = arr[Symbol.iterator]();
// console.log(arrIter.next().value); // a
// console.log(arrIter.next().value); // b
// console.log(arrIter.next().value); // c
// console.log(arrIter.next().value); // d
// console.log(arrIter.next().value); // e
// console.log(arrIter.next().value); // undefined


// Handling strings and string arrays with the same function
// Because both strings and arrays implement the iterable protocol, a generic function can be designed to handle both inputs in the same fashion. This is better than calling Array.prototype.values() directly, which requires the input to be an array, or at least an object with such a method.

function logIterable(it) {
  if (!(Symbol.iterator in it)) {
    console.log(it, " is not an iterable object.");
    return;
  }

  for (const letter of it) {
    console.log(letter);
  }
}

// Array
logIterable(["a", "b", "c"]);
// a
// b
// c

// string
logIterable("abc");
// a
// b
// c

logIterable(123);
// 123 is not an iterable object.





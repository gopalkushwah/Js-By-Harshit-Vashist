// Array.prototype.entries()
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
//it returns the value with there index [ index, values ]

// Syntax
// ArrayName.entries()


const array1 = ['a', 'b', 'c', 'd', 'e'];

const iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);
// expected output: Array [1, "b"]







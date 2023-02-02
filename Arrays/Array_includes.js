// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


// Array.prototype.includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// Syntax
// includes(searchElement)
// includes(searchElement, fromIndex)

// Parameters
// searchElement
// The value to search for.

// Note: When comparing strings and characters, includes() is case-sensitive.

// fromIndex Optional
// The position in this array at which to begin searching for searchElement.

// The first element to be searched is found at fromIndex for positive values of fromIndex, or at arr.length + fromIndex for negative values of fromIndex (using the absolute value of fromIndex as the number of elements from the end of the array at which to start the search).

// Defaults to 0.



// let arr = [1,2,3,4,5];
// console.log(arr.includes(6));  //false
// console.log(arr.includes(5));  //true

// let animal = ['cat','dog','elephant','cow'];
// console.log(animal.includes("fox"));  //false
// console.log(animal.includes("cat"));  //true
// console.log(animal.includes("cat",2));  //false    index>=2

// let animal = ['cat','dog','elephant','cow','cat'];
// console.log(animal.includes("cat",2));  //true    index>=2
//         ----> 0    1       2         3
//              -4     -3   -2         -1    <-------
// let animal = ['cat','dog','elephant','cow'];
// console.log(animal.includes("cat",-3));  //true    (-2,-1,0,1,2.....)index>=-3


// console.log([1, 2, 3].includes(2) );        // true
// console.log([1, 2, 3].includes(4))       // false
// console.log([1, 2, 3].includes(3, 3))      // false    index>=3
// console.log([1, 2, 3].includes(3, -1))     // true     inex>=-1
// console.log([1, 2, 3,"A"].includes(NaN,3) )    // false
// console.log([1, 2, NaN].includes(NaN) )    // true
// console.log(["1", "2", "3"].includes(3))   // false

// Using includes() on sparse arrays
// You can search for undefined in a sparse array and get true.

// console.log([1, 2, 3].includes(undefined)); // false
// console.log([1, , 3].includes(undefined)); // true

(function () {
    console.log(Array.prototype.includes.call(arguments, 'a')); // true
    console.log(Array.prototype.includes.call(arguments, 'd')); // false
  })('a', 'b', 'c');



  

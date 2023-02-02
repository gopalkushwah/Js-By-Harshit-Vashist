// Array.prototype.join()
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

// // let a = [1,2,3,4,5];
// // let b = a.toString();
// // console.log(b,typeof b);   //1,2,3,4,5 string

// Syntax
// join()
// join(separator)

// let a = [1,2,3,4,5];
// let c = a.join();   
// console.log(c,typeof c);  //1,2,3,4,5  string

// c=a.join('');
// console.log(c);  //12345    string

// c=a.join('_');
// console.log(c);  //1_2_3_4_5   string


// c=a.join('-');
// console.log(c);  //1_2_3_4_5   string

// Parameters
// separator Optional
// Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.

// Return value
// A string with all array elements joined. If arr.length is 0, the empty string is returned.

// Description
// The string conversions of all array elements are joined into one string. If an element is undefined, null, it is converted to an empty string instead of the string "null" or "undefined".

// The join method is accessed internally by Array.prototype.toString() with no arguments. Overriding join of an array instance will override its toString behavior as well.

// When used on sparse arrays, the join() method iterates empty slots as if they have the value undefined.

// Examples
// Joining an array four different ways
// The following example creates an array, a, with three elements, then joins the array four times: using the default separator, then a comma and a space, then a plus and an empty string.

const a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'
// Copy to Clipboard
// Joining an array-like object
// The following example joins array-like object (arguments), by calling Function.prototype.call on Array.prototype.join.

function f(a, b, c) {
  const s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
//expected output: "1,a,true"
// Copy to Clipboard
// Using join() on sparse arrays
// join() treats empty slots the same as undefined and produces an extra separator:

console.log([1, , 3].join()); // '1,,3'
console.log([1, undefined, 3].join()); // '1,,3' 


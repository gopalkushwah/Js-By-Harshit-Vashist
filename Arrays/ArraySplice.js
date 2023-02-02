// splice can we used for all works which can we done by shift unshift pop and push 
// Array.prototype.splice()

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice(). 
//it is use to insert or replace the element in present array

// syntax:
// arrayName.splice(indexNumberToInsert,indexNumberToReplace,value);
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)



// --------------------------------------------------------
// let months =['jan','march','april','jun'];
// console.log(months);   //before using splice() method
// months.splice(1,0,'feb');
// console.log(months);   //after using splice() method
// --------------------------------------------------------
// let months =['jan','march','april','jun'];
// console.log(months);   //before using splice() method
// // months.splice(3,1,'may');
// // console.log(months);   //after replacing the value by splice() method at index 3 with 1 value 'may'
// months.splice(3,1,'may','jun','july');
// console.log(months);   //after replacing the value by splice() method at index 3 with 1 value 'may'

// months.splice(4,2,'may','jun','july');
// console.log(months);   //after replacing the value by splice() method at index 3 with 1 value 'may'


// ----------------------------------------------------------------------------------------
// Using splice() to Remove Elements

// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:
// Example
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(0, 1);
// console.log(fruits);

// fruits.splice(3,1);
// console.log(fruits);

// The first parameter (0) defines the position where new elements should be added (spliced in).
// The second parameter (1) defines how many elements should be removed.
// The rest of the parameters are omitted. No new elements will be added.


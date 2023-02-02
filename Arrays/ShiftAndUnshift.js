// ----------------------------UNSHIFT()--------------------------------------------
// unshift is used to add one or more elements from the starting index of an array and  it returns the new length of array 
// Inserts new elements at the start of an array, and returns the new length of the array.

// Syntax :-
// unshift(element0)
// ushift(element0,element1)
// ushift(element0,element1................)
// Array.unshift(element0,element1................)


// let fruits = ["banana","mengo","apple"];
// // console.log(fruits.length);
// // fruits.unshift(12);
// // console.log(fruits);

// // console.log(typeof fruits);
// fruits.unshift("coconut","orange");
// console.log(fruits);

// ----------------------------------------------------------------------------------------------
// ----------------------------------SHIFT()-----------------------------------------------------
// shift :- it is used to remove one array element at starting index of array and it returns the new length of the array
// Syntax:-
// shift()
// Array.shift();


let fruits = ["coconut","orange","banana","mengo","apple"];
// console.log(fruits.length);
// console.log(fruits);  //["coconut","orange","banana","mengo","apple"];

// fruits.shift();
// console.log(fruits);   //[ 'orange', 'banana', 'mengo', 'apple' ]

fruits.shift();
console.log(fruits);   //[ 'banana', 'mengo', 'apple' ]
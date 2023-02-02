// Arrays :- its a user define type of data type
// An array is a special variable, which can hold more than one value:
// its an ordered collaction of items 
// similar types of values can hold a array 
// ----------------------------------------------------------------
// JavaScript array is an object that represents a collection of similar type of elements.
// There are 3 ways to construct array in JavaScript
// By array literal
// By creating instance of Array directly (using new keyword)
// By using an Array constructor (using new keyword)
// ----------------------------------------------------------------
// let userName = ["Gopal","Sumit","Dilip","Kanchan"];
// console.log(userName);
// ----------------------------------------------------------------
// let userName = ["Gopal","Sumit","Dilip","Kanchan"];
// console.log(userName[0]);
// console.log(userName[1]);
// console.log(userName[2]);
// console.log(userName[3]);
// ----------------------------------------------------------------
// let userName = ["Gopal","Sumit","Dilip","Kanchan"];
// for(let i=0;i<userName.length;i++){
//     console.log(`userName[${i}] = ${userName[i]}`);
// }
// ----------------------------------------------------------------
// let mixed = [1,2,3.5,3.6,"Gopal","Sumit",null,undefined];
// console.log(mixed);
// console.log(typeof mixed); //object
// for(let i=0;i<mixed.length;i++){
//     console.log(`mixed[${i}] = ${mixed[i]}`);
// }
// ----------------------------------------------------------------
// if we will change the value of array it will permanent change in array becouse array it mutable
// changing value of array
// let mixed = [1,2,3.5,3.6,"Gopal","Sumit",null,undefined];
// console.log(mixed);
// mixed[3]="hello";  //any type of value can be replaced in array with other type of value   ---> 3.6 is replaced by hello  --> it is permanent change of array value
//console.log(mixed);   //1,2,3.5,"hello","Gopal","Sumit",null,undefined
// // ----------------------------------------------------------------
// let mixed = [1,2,3.5,3.6,"Gopal","Sumit",null,undefined];  //  type => object
// let obj = {}; //object literal   ---> type => object
// console.log(typeof mixed);
// console.log(typeof obj);

// // Array.isArray()  ----> function is used to check this is array or not (if array then this function will return true otherwise it will return false)
// console.log(Array.isArray(mixed));
// console.log(Array.isArray(obj));
// // ----------------------------------------------------------------
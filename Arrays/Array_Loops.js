// let arr = [10,50,60,30,40];
// for(i=0;i<arr.length;i++){
    //     console.log(arr[i]);
    // }
    
    // Array.prototype.forEach()
    // The forEach() method executes a provided function once for each array element.
    
    // Syntax
// // Arrow function
// forEach((element) => { /* … */ })
// forEach((element, index) => { /* … */ })
// forEach((element, index, array) => { /* … */ })

// // Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// // Inline callback function
// forEach(function(element) { /* … */ })
// forEach(function(element, index) { /* … */ })
// forEach(function(element, index, array){ /* … */ })
// forEach(function(element, index, array) { /* … */ }, thisArg)

// arrow method for forEach method:-
// let arr = [10,50,60,30,40];

// arr.forEach((element)=>{
//     console.log(element);
// })

// arr.forEach((element)=>{
//     console.log(element*element);
// })

// normal function for forEach method
// let arr = [10,50,60,30,40];
// function square(element){
//     console.log(element*element);
// } 
// arr.forEach(square);

// // function Expresion for forEach method
// let arr = [10,50,60,30,40];
// let squareEx = function (element){
//     console.log(element*element);
// } 
// arr.forEach(squareEx);

// function Expresion for forEach method
// let arr = [10,50,60,30,40];
// let squareEx = (element)=>{
//     console.log(element*element);
// } 
// arr.forEach(squareEx);

// ---------------------------------------------------------------------------------------------------
// Note: forEach expects a synchronous function.     //forEach method asynchronous methods ke sath kam nahi karta

// forEach does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callback.

// const ratings = [5, 4, 5];
// let sum = 0;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
// });

// console.log(sum);
// Naively expected output: 14
// Actual output: 0


// ----------------------------------------------------------------------------------------------------
// // Examples
// // Using forEach() on sparse arrays
// const arraySparse = [1, 3, /* empty */, , 7];
// let numCallbackRuns = 0;
// console.log(arraySparse.length);
// arraySparse.forEach((element) => {
//   console.log({ element });
//   numCallbackRuns++;
// });
// // for(i=0;i<arraySparse.length;i++){
// //     console.log(arraySparse[i]);
// //       numCallbackRuns++;

// // }
// console.log({ numCallbackRuns });

// // { element: 1 }
// // { element: 3 }
// // { element: 7 }
// // { numCallbackRuns: 3 }
// The callback function is not invoked for the missing value at index 2.

// ------------------------------------------------------------------------------------------------

// Converting a for loop to forEach
// const items = ['item1', 'item2', 'item3'];
// const copyItems = [];

// before
// for (let i = 0; i < items.length; i++) {
//  copyItems.push(items[i]);
// }
// console.log(copyItems);

// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });
// -------------------------------------------------------------------------------

// const logArrayElements = (element, index /*, array */) => {
    //   console.log(`a[${index}] = ${element}`);
// };

// // Notice that index 2 is skipped, since there is no item at
// // that position in the array.
// [2, 5, , 9].forEach(logArrayElements);
// // logs:
// // a[0] = 2
// // a[1] = 5
// // a[3] = 9

// -------------------------------------------------------------------------------
// Using thisArg
// The following (contrived) example updates an object's properties from each entry in the array:

// class Counter {
//   constructor() {
//     this.sum = 0;
//     this.count = 0;
//   }
//   add(array) {
//     // Only function expressions will have its own this binding
//     array.forEach(function countEntry(entry) {
//       this.sum += entry;
//       ++this.count;
//     }, this);
//   }
// }

// const obj = new Counter();
// obj.add([2, 5, 9]);
// console.log(obj.count); // 3
// console.log(obj.sum); // 16

// =========================================================================================
// function Person(first, last, age, eyecolor) {
  //   this.firstName = first;
  //   this.lastName = last;
  //   this.age = age;
  //   this.eyeColor = eyecolor;
  // }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");

// Person.prototype.home= "bopal";
// console.log(myFather.home);

// console.log(typeof myFather)

// =========================================================================================
// const copy = (obj) => {
//   const copy = Object.create(Object.getPrototypeOf(obj));
//   const propNames = Object.getOwnPropertyNames(obj);
//   propNames.forEach((name) => {
//     const desc = Object.getOwnPropertyDescriptor(obj, name);
//     Object.defineProperty(copy, name, desc);
//   });
//   return copy;
// };

// const obj1 = { a: 1, b: 2 };
// const obj2 = copy(obj1); // obj2 looks like obj1 now
// console.log(obj1.a);
// console.log(obj1.b);
// console.log(obj2);





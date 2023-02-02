// Array.prototype.map()
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// it cant affect the origional array origional array still remainig same as first 

// while forEach method does not creates new array it only perform some task on array

// Syntax
// // Arrow function
// map((element) => { /* … */ })
// map((element, index) => { /* … */ })
// map((element, index, array) => { /* … */ })

// // Callback function
// map(callbackFn)
// map(callbackFn, thisArg)

// // Inline callback function
// map(function(element) { /* … */ })
// map(function(element, index) { /* … */ })
// map(function(element, index, array){ /* … */ })
// map(function(element, index, array) { /* … */ }, thisArg)
// Copy to Clipboard

// const arr = [11,22,33,44];
// // console.log(arr);   // [11,22,33,44]
// let a = arr.map((val)=>{
//     // console.log(val);   /fetch value one by one
//     return val+1; 
// })
// // console.log(a);   // output = [11,22,33,44]
//  console.log(arr);   // [11,22,33,44]


// const arr = [11,22,33,44];
// let a = arr.map((val,index)=>{
//     console.log(`arr[${index}] = ${val}`);
//     // return val; 
    
// })
//  console.log(a);   


// ---------------------------------------------------------------------------------------------

// const arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     {},   //undefined
//     { id: null },
//     { id: NaN },
//     { id: 'undefined' },
//   ];


//   let a = arr.map((val,index)=>{
//       console.log(`arr[${index}] = ${val.id}`);
//       // return val; 
      
//   })



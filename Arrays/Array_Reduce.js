// Array.prototype.reduce()
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).

// Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements in an array:
// Syntax
// // Arrow function
// reduce((previousValue, currentValue) => { /* … */ } )
// reduce((previousValue, currentValue, currentIndex) => { /* … */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* … */ } )

// reduce((previousValue, currentValue) => { /* … */ } , initialValue)
// reduce((previousValue, currentValue, currentIndex) => { /* … */ } , initialValue)
// reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)

// // Callback function
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// // Inline callback function
// reduce(function(previousValue, currentValue) { /* … */ })
// reduce(function(previousValue, currentValue, currentIndex) { /* … */ })
// reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ })

// reduce(function(previousValue, currentValue) { /* … */ }, initialValue)
// reduce(function(previousValue, currentValue, currentIndex) { /* … */ }, initialValue)
// reduce(function(previousValue, currentValue, currentIndex, array) { /* … */ }, initialValue)

// const arr = [1,2,5,3,6,1,2,9];
// const arr1 = arr.reduce((h1,h2,h3)=> h1+h2);
// console.log(arr1);

// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );
// console.log(sumWithInitial);
// // expected output: 10

// -------------------------------------------------------------------------------------------------------------------
// const getMax = (a, b) => Math.max(a, b);

// callback is invoked for each element in the array starting at index 0
// console.log([1, 100].reduce(getMax, 50)); // 100
// [50].reduce(getMax, 10); // 50

// callback is invoked once for element at index 1
// [1, 100].reduce(getMax); // 100

// callback is not invoked
// [50].reduce(getMax); // 50
// [].reduce(getMax, 1); // 1

// console.log([].reduce(getMax)); // TypeError: Reduce of empty array with no initial value

// -------------------------------------------------------------------------------------------------------------------
// How reduce() works withou`t an initial value
// The code below shows what happens if we call reduce() with an array and no initial value.

// const array = [15, 16, 17, 18, 19];

// function reducer(previousValue, currentValue, index) {
//   const returns = previousValue + currentValue;
//   console.log(
//     `previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

// array.reduce(reducer);



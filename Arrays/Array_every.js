// Array.prototype.every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// Arrow function
// every((element) => { /* … */ } )
// every((element, index) => { /* … */ } )
// every((element, index, array) => { /* … */ } )

// // Callback function
// every(callbackFn)
// every(callbackFn, thisArg)

// // Inline callback function
// every(function(element) { /* … */ })
// every(function(element, index) { /* … */ })
// every(function(element, index, array){ /* … */ })
// every(function(element, index, array) { /* … */ }, thisArg)


// const isBelowThreshold = (currentValue) => currentValue < 40;
function myfun(check){
    return check<40;
}
const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(myfun));
// expected output: true





// fill method:
    // fill method changes the origional array 
    // it is used to fill the value in an array or an object 

// const myArray = new Array(10).fill(0);
// console.log(myArray);

let myArray = [1,2,3,4,5,6,7,8,9];
myArray.fill(2,2,4);     //value = 2, starting = 2, ending = 4-1=3
console.log(myArray);
myArray.fill(6,5,8);     //value = 6, starting = 5, ending = 8-1=7
console.log(myArray);


//if we dont want changes in origional array then use slice method to create an copy of array
myArray = [1,2,3,4,5,6,7,8,9];
const ans = myArray.slice(0).fill(3,1,5);
console.log(myArray);   //original array 
console.log(ans); // copy of an array

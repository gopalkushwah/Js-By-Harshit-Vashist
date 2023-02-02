// set :
// it is iterable
// store data
// no index based access 
// set have its own methods
// order not gauranteed
// unique items only (no duplicate allowed)


// const newSet = new Set([1,2,3,4]);
// console.log(newSet);  //Set(4) {1, 2, 3, 4}


// const newSet = new Set("kunal");
// console.log(newSet);  //Set(5) {'k', 'u', 'n', 'a', 'l'}

                                        //no duplicate allowed accept only one
// const newSet = new Set(["item1","item2","item3","item3"]);
// console.log(newSet);  //Set(3) {'item1', 'item2', 'item3'}

// const numbers = new Set();

// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(4);  //no duplicate acepted
// console.log(numbers);  //Set(4) {1, 2, 3, 4}

// ---------------------------------------------

// const numbers = new Set();
// let arr = ['item1','item1','item2','item3'];
// numbers.add(1);
// numbers.add(2);
// numbers.add(arr);
// // numbers.add(arr); //no duplicate acepted but
// numbers.add(['item1','item1','item2','item3']);
// numbers.add(['item1','item1','item2','item3']);  //its allowed
// console.log(numbers);

// ---------------------------------------------
// length property does not work on set

// const numbers = new Set();
// let arr = ['item1','item1','item2','item3'];
// numbers.add(1);
// numbers.add(2);
// numbers.add(arr);
// console.log(numbers.length);  //undefined

// ---------------------------------------------
// for set we can use size to find the length
// length = size 
// const numbers = new Set();
// let arr = ['item1','item1','item2','item3'];
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(arr);
// console.log(numbers.size);  

// ---------------------------------------------
// select comman values from array by using set
// const arr = [1,2,3,4,5,6,7,7,8,8,3];   

// let numbers = new Set(arr);
// console.log(numbers);
// console.log(arr);
// console.log(arr.length);  // length of array = 11
// console.log(numbers.size);   // length of set = 8


// ---------------------------------------------
// how to count lenght of set by using for of loop 
const arr = [1,2,3,4,5,6,7,7,8,8,3];   

let numbers = new Set(arr);
let count = 0;
for(let number of numbers){
    count++;
}

console.log(count);  //8
console.log(numbers.size);   //8
// ---------------------------------------------







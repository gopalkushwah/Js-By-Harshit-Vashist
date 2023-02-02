// functions in js
// 1. normal way
//2. function expression
// 3. anonymous function
// 4. fat arrow method

// 1. normal way
// function myfun(value){
//     return value+2;
// }
// console.log(myfun(5));

//2. functions expressions
// let funexp=function myfun(value){return value*2}
// console.log(funexp(10));

//3. anonymous functions -
// let funexp=function (value){return value+10}
// console.log(funexp(10));

// 4. fat arrow method-
// syntax - ()=>{}
let value = 50;
let myfun=(value)=>{
    return value*2
}
console.log(myfun(value));
// dry ---> dont repeat yourself 

// while loop 
// print number upto 10
// let i=1;

// while(i<=10){
//     console.log(i++);
// }

// // print number upto user input 
// let i=1;
// let userInput = +prompt("Enter any number ");
// while(i<=userInput){
//         console.log(i++);
// }

// // sum upto user input 
// let i=1,sum=0;
// let userInput = +prompt("Enter any number");
// while(i<=userInput){
//     sum+=i;
//     i++; 
// }
// console.log("sum= ", sum);

// with the help of formula 
// let num=100,sum = (num*(num+1))/2;
// console.log(sum);



// ---------------------------------------------------------------------
// for loop
// print number series upto 10
// for(let i=1;i<=10;i++)
    // console.log(i);
// ---------------------------------------------------------------------
// for(let i=1;i<=10;i++){
//     console.log(i);
// }
// console.log(i);  // it not a global variable //its an error -->i is not defined  or undefine
//                 // if we want to use i variable out side of loop we have to declare its type as var 
//error solving
// for(var i=1;i<=10;i++){
//     console.log(i);
// }
// console.log(i);  // it a global variable //no error
// ---------------------------------------------------------------------


// print table of any number
// let userInput = +prompt("Enter any number ");
// for(let i=1;i<=10;i++){
//     console.log(`${userInput} * ${i} = ${userInput*i}`);
// }    
    
// ---------------------------------------------------------------------

// do while loop
// let i=1;
// do{
//   console.log(i++);  
// }while(i<=10);



// // -------------------------------------------------------------------------------------------------
// // FOR IN LOOP
// let obj = {
//     gopal: 10,
//     girraj: 52,
//     himanshu: 20,
//     ritik: 95,
//     sohan: 36
// }
// console.log(typeof(obj) );
// for(let marks in obj){
//     console.log(`marks of ${marks} is ${obj[marks]}`);
// }

// -------------------------------------------------------------------------------------------------
// FOR IN LOOP
// let arr= [10,20,30,50,60];
// for(let marks of arr){
//     console.log(`marks of ${marks}`);
// }


// let arr= [10,20,30,50,60];
// let sum =0;
// for(let marks of arr){
//     sum+=marks;
// }
// console.log(sum);



// let str= "Gopal";
// for(let words of str){
//     console.log(`letter of ${str} is ${words}`);
// }
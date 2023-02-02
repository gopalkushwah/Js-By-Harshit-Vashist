//*********** setTimeout,clearTimeout, */

//******************************** setTimeout *********************************************** */
// setTimeout : 
// Definition and Usage
// The setTimeout() method calls a function after a number of milliseconds.

// 1 second = 1000 milliseconds.
// setTimeout(function, milliseconds, param1, param2, ...)

// setTimeout does not block the next code 

// =======================================================================
// console.log("Script start");
// function hello(){
//     console.log("Hello world");
// }
// setTimeout(hello,1000);
// console.log("Script end");
// ----------- output ---------------------
// Script start
// Script end
// Hello world

// =======================================================================
// console.log("Script start");

// setTimeout(()=>{
    //     console.log("Inside setTimeout");
// },1000);

// for(let i = 0;i<=9999;i++)
// {
//     console.log(".......");

// }
// console.log("Script end");
// ----------- output ---------------------
// Script start
// 10000 .......
// Script end
// Inside setTimeout

//******************************** setTimeout *********************************************** */
// setTimeOut returns a id : id starts from 1
// console.log("Script start");
// const setTimeId = setTimeout(()=>{
//     console.log("Inside setTimeout");
// },1000);

// for(let i = 0;i<=9999;i++)
// {
//     console.log(".......");
    
// }
// console.log("setTimeOut id is ",setTimeId);
// console.log("Clearing set time out ");
// clearTimeout(setTimeId);
// console.log("Script end");
// =======================================================================
console.log("Script start");
const setTimeId = setTimeout(()=>{
    console.log("Inside setTimeout 1");
},1000);

const setTimeId1 = setTimeout(()=>{
    console.log("Inside setTimeout 2");
},1000);

for(let i = 0;i<=9999;i++)
{
    console.log(".......");
    
}
console.log("setTimeOut id is ",setTimeId);   //id : 1
console.log("setTimeOut id is ",setTimeId1);  //id : 2
console.log("Clearing set time out ");
clearTimeout(setTimeId);    // tell to javascript , do not execute the funtion which has this id - setTimeId
console.log("Script end");
// =======================================================================

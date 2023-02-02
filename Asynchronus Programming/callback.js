// passing function as a argument in a function parameter is known as callback function 

// function myfun1(callback){
//     console.log("function is doing task 1");
//     callback();
// }
// function myfun2(){
//     console.log("function is doing task 2");
// }

// myfun1(myfun2);
// ===============================================================

// function myfun1(callback,callback1){
//     console.log("function is doing task 1");
//     callback();
//     callback1();
// }

// myfun1(function(){
//     console.log("function is doing task 2");
// },()=>{
//     console.log("function is doing task 3");
// });

// ===============================================================
function getTwoNumberSum(number1,number2,onSuccss){
    if(number1 !== "number" && number2 !== "number")
        onSuccss(number1,number2);
    else
        console.log("wrong datatype");
}
function onSuccss(num1,num2){
    console.log(num1+num2);
}

getTwoNumberSum(5,6,onSuccss);

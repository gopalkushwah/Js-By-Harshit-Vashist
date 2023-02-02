let is = false;
// ********************************** Function ******************************
// function isEven(num){
//     if(num%2===0){
//         // console.log("Number is Even");
//         is = true;
//         return is;
//     }
//     else {
//         // console.log("Number is odd");
//         is = false;
//         return is;
//     }
// }



// ********************************** Function ******************************

// function isEven(num){
//         return num%2===0;
// }
// console.log("is this a even number : ",isEven(6));

// ********************************** Function Expression ******************************

// let isEven = function(num){
//         return num%2===0;
// }
// console.log("is this a even number : ",isEven(6));

// ********************************** Arrow Function ******************************

// let isEven = (num)=>{
//         return num%2===0;
// }


let isEven = num => num%2===0;   //this is also an arrow function

console.log("is this a even number : ",isEven(6));


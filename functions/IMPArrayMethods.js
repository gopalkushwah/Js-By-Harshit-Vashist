//important array methods

//forEach
//map
//filter
//reduce


// let arr = [4,2,5,6,9];
// function myFunc(number,index){
//     console.log(`${number}*2 = ${number*2}  and index is ${index}`);
// }

// for(let i = 0; i< arr.length ; i++){
//     myFunc(arr[i],i);
// }


// arr.forEach(myFunc);   //same as the above for loop
//***************************************************************************** */

// arr.forEach(function(number,index){
//     console.log(`${number}*2 = ${number*2}  and index is ${index}`);
// }
// );
// ***************************************************************************** */

// let users= [
//     {firstName : "Gopal",age : 22},
//     {firstName : "girraj",age : 20},
//     {firstName : "ritik",age : 23},
//     {firstName : "himanshu",age : 21},
// ]
//*************** By using forEach*************** */
// users.forEach(function(user){
//     console.log(`user name = ${user.firstName}`);
// });
    
//*************** By using for of *************** */
// for(let user of users){
    // console.log(`user name = ${user.firstName}`);    
// }

// ***************************** Map *****************************************
// Map :- map method returns a new array 
// if we are using map method it is must to return something 

// let arr = [4,2,5,6,9];
// function square(number){
//     return number*number;
// }

// const squareArray = arr.map(square);
// console.log(squareArray);    //output : [16,4,25,36,81]
// console.log(arr.map(square));    //output : [16,4,25,36,81]

// const squareArray = arr.map(function(number){
//     return number*number;
// });
// console.log(squareArray);    //output : [16,4,25,36,81]

// const squareArray = arr.map((number)=>{
//     return number*number;
// });
// console.log(squareArray);    //output : [16,4,25,36,81]


// let users= [
//     {firstName : "Gopal",age : 22},
//     {firstName : "girraj",age : 20},
//     {firstName : "ritik",age : 23},
//     {firstName : "himanshu",age : 21},
// ]

// // const userName = users.map((user)=>{
// //     return user.firstName;
// // })
// const userName = users.map(function(user){
//     return user.firstName;
// })
// console.log(userName);

//*********************** filter ************************* */
// filter : it is an array method 
// it  returns a Boolean value

// let arr = [1,2,3,4,5,6,7,8,9];

// function isEven(number){
//  return number%2===0;
// }

// function isOdd(number){
//  return number%2===1;
// }


// // const evenArray = arr.filter(isEven);
// // console.log(evenArray);
// const evenArray = arr.filter((number)=>{
//      return number%2===0;
// });
// console.log(evenArray);
// const oddArray = arr.filter(isOdd);
// console.log(oddArray);

// ********************* reduce *******************************

// let arr = [1,2,3,4,5,6]

// const sum = arr.reduce((accumulator,currentValue)=>{
//     return accumulator + currentValue;
// });

// console.log(sum);


// how it works : 
// ______________________________________________________________________________
// accumulator     ,    currentValue,     return
//    1            +        2          =     3 
//    3            +        3          =     6
//    6            +        4          =     10
//    10           +        5          =     15
//    15           +        6          =     21

// final return value 21
// ______________________________________________________________________________


// let userCart = [
//     {productId : 1,productName : "mobile", price : 12000},
//     {productId : 2,productName : "laptop", price : 34000},
//     {productId : 3,productName : "tv", price : 15000},
// ]

// const totalAmount = userCart.reduce((totalPrice,currentProduct)=>{
//     return totalPrice + currentProduct.price;
// },0);

// console.log(totalAmount);

// ______________________________________________________________________________
//  **************************** sort *******************************************
// sort : 
// sort work on array and change the origional array 
// sort converts array value in string and then sort in accending order
// sort method sorts anything by its ascii value 

// some ascii values : 
// 0  == 48    to 9 == 57

// A == 65  to    Z == 90
// a == 97  to    z == 122


// let arr = [2,9,1,6464,3000,12000];
// // sort do like this : ["2","9","1","6464","3000","12000"]
// arr.sort();
// console.log(arr);  // origional array has changed by sort

// praority of capital later is higher then lower case later 
// let arr = ["gopal","sumit","kapil","dilip","ashish","abhishek","ABC","BCD"];
// arr.sort();
// console.log(arr);  // OUTPUT : ['ABC', 'BCD', 'abhishek', 'ashish', 'dilip', 'gopal', 'kapil', 'sumit']

// ______________________________________________________________________________
// let arr = [2,9,1,10,8,12];

// arr.sort((first,second)=>{
//     return first-second;
// });

// console.log(arr); //OUTPUT : [1, 2, 8, 9, 10, 12]

// how it works :
/*
first     -   second   = if(+ve) then return first if (-ve) then second
example : 
10,8
a-b  == 10-8  == 2
a-b = is positive(greater then 0) -----> b,a
8,10
*/ 
// ______________________________________________________________________________
// let arr = [2,9,1,10,8,12];

// arr.sort((first,second)=>{
//     return second-first;
// });

// console.log(arr); //OUTPUT : [1, 2, 8, 9, 10, 12]


// let userCart = [
//     {productId : 1,productName : "mobile", price : 12000},
//     {productId : 2,productName : "laptop", price : 34000},
//     {productId : 3,productName : "tv", price : 15000},
//     {productId : 3,productName : "remote", price : 500},
//     {productId : 3,productName : "tablet", price : 20000},
//     {productId : 3,productName : "ear Phone", price : 1350}
// ]

// console.log("low to high");
// //low price to high price 
// userCart.sort((pr1,pr2)=>{
//     return pr1.price-pr2.price;
// });
// console.log(userCart);


// console.log("High to low");
// //high price to low price 
// userCart.sort((pr1,pr2)=>{
//     return pr2.price-pr1.price;
// });
// console.log(userCart);


// if we dont want to change our original array while using sort we can do the clone of sorted array by using slice method 

let userCart = [
    {productId : 1,productName : "mobile", price : 12000},
    {productId : 2,productName : "laptop", price : 34000},
    {productId : 3,productName : "tv", price : 15000},
    {productId : 3,productName : "remote", price : 500},
    {productId : 3,productName : "tablet", price : 20000},
    {productId : 3,productName : "ear Phone", price : 1350}
]

const newUser = userCart.slice(0).sort((pr1,pr2)=>{
    return pr1.price-pr2.price;
});

console.log("Origional  Array ");
console.log(userCart);
//sorted array 
console.log(newUser);

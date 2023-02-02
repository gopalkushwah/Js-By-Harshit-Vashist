// Optional Chainig
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

// ------------------------------------------------------------
// const User = {
//     firstName : "Gopal",
//     address : {houseNumber : 220}   //when address found no error
// }
// console.log(User.firstName);
// console.log(User.address.houseNumber); 


// ------------------------------------------------------------
// const User = {
//     firstName : "Gopal",
//     // When address doesnt exit it will give an error 

// }
// console.log(User.firstName);
// console.log(User.address.houseNumber);    //it will create error, to over come this error optional chaining is introduced
// console.log(User.firstName);


// ------------------------------------------------------------
// const User = {
//     firstName : "Gopal",
//     // address : {houseNumber : 220}
// }
// console.log(User.firstName);
// console.log(User?.address?.houseNumber);   //  ?.  --> optional chaining
//                                            // Output : undefined



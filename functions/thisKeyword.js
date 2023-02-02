// this :
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:

// const person = {
//     firstName : "Gopal",
//     age : 22,
//     about : function(){
//     console.log(this);
//     }
// };

// person.about();  //output = {firstName: 'Gopal', age: 22, about: ƒ}
// this keyword contain the whole object values 
// it means 
// person = this

// _____________________________________________________________


// const person = {
//     firstName : "Gopal",
//     age : 22,
//     about : function(){
//                                     //here  person = this
//         console.log(`person name is ${person.firstName} and age is ${person.age}`);
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//         console.log(this===person);  //true
//     }
// };

// person.about();  

// _____________________________________________________________

// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);
// }
// const person1 = {
//     firstName : "Gopal",
//     age : 22,
//     about : personInfo    // we are setting the value of about personInfo
//                          // we are not calling personInfo
// };
// const person2 = {
//     firstName : "Girraj",
//     age : 20,
//     about : personInfo
// };
// const person3 = {
//     firstName : "Anish",
//     age : 30,
//     about : personInfo
// };
// const person4 = {
//     firstName : "Sumit",
//     age : 15,
//     about : personInfo
// };
// const person5 = {
//     firstName : "Dilip",
//     age : 14,
//     about : personInfo
// };

// person1.about();  
// person2.about();  
// person3.about();  
// person4.about();  


// _____________________________________________________________


// window object or global scope of this keyword

// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.

// both are same
// console.log(this.alert("Hello world"));
// console.log(window.alert("Hello world"));

// console.log(this===window);   //true

// _____________________________________________________________
// it will return the value of window object 
// to restrict it we can use "use strict"
// function myfunc(){
//     console.log(this);
//     console.log(window);
// }

// myfunc();


// "use strict"
// function myfunc(){
//     console.log(this);   //undefined
// }

// myfunc();
// JavaScript Methods: A JavaScript method is a property of an object that contains a function definition. Methods are functions stored as object properties. Object method can be accessed with the following syntax:

// Syntax:

// object = {
//     methodName: function() {
//         // Content
//     }
// };
// object.methodName()

// -------------------------------------------------------------------
// const user = {
//     // firstName : "Gopal",
//     firstName : "Girraj",
//     age : 22,
//     about : function(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     }
// }
// // console.log(user.about); 
// // Output : ()=>{
//  //     console.log(`person name is ${this.firstName} and age is ${this.age`);
//  // }

// user.about();  // calling of object method 
 
// -------------------------------------------------------------------
// const user = {
//     // firstName : "Gopal",
//     firstName : "Girraj",
//     age : 22,
//     //shortcut
//     about(){
//         console.log(`person name is ${this.firstName} and age is ${this.age}`);
//     }
// }
// // console.log(user.about); 
// // Output : ()=>{
//  //     console.log(`person name is ${this.firstName} and age is ${this.age`);
//  // }

// user.about();  // calling of object method 
 

// -------------------------------------------------------------------

// dont do this mistakes : 

// const user = {
//     firstName : "Girraj",
//     age : 22,
//     about:function(){
//         console.log(this.firstName ,this.age);
//     }
// }

// // both are same statment 
// // const userfunc = user.about;  

// // const userfunc = function(){
// //     console.log(this.firstName ,this.age); 
// // }
// // userfunc();

// // resolve this problem by using bind method 

// const userfunc = user.about.bind(user);
// userfunc();

// -------------------------------------------------------------------

// dont use arrow function inside the object 


const user = {
    firstName : "Girraj",
    age : 22,

    //here this reffers the windows object not to the user object inside the arrow method

    //arrow function does not contains "this" it take "this" from outer object 
    about: ()=>{
        // console.log(this);  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        console.log(this.firstName ,this.age);
    }
}

const userfunc = user.about.bind(user);
userfunc();   //return undefined undefined


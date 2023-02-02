// call():
// it helps you replace the value of this inside a function with whatever value you want.
// Call is a function that helps you change the context of the invoking function.


// ___________________________________________________________________
// Normal method inside an object 
// const user1 = {
//     firstName : 'Gopal',
//     age : 22,
//     about : function(){
//         console.log(this.firstName,this.age);
//     }
// }


// both are same 
// user1.about();
// user1.about.call(user1);

// ___________________________________________________________________

// const user1 = {
//     firstName : 'Gopal',
//     age : 22,
//     about : function(hobby, favSinger){
//         console.log(this.firstName,this.age,hobby,favSinger);
//     }
// }
// const user2 = {
//     firstName : 'Girraj',
//     age : 20,

// }

// user1.about.call(user1,"play cricket","Arijit");    //Gopal 22

// user1.about.call(user2,"Play real cricket","Jubbin");    //Girraj 20
// here we are passing user2 for change the value of this in user1 

// ___________________________________________________________________

// function about(){
//     console.log(this.firstName,this.age);
// }
// const user1 = {
//     firstName : 'Gopal',
//     age : 22,
    
// }
// const user2 = {
//     firstName : 'Girraj',
//     age : 20,
// }

// about.call(user1);    //Gopal 22
// about.call(user2);    //Girraj 20

// ___________________________________________________________________

// Apply() :
// The apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).
// Apply is very similar to the call function. The only difference is that in apply you can pass an array as an argument list.


// const user1 = {
//     firstName : 'Gopal',
//     age : 22,
//     about : function(arr){
//         console.log(this.firstName,this.age,arr);   
//     }
// }
// const user2 = {
//     firstName : 'Girraj',
//     age : 20,
// }

// user1.about.apply(user1,["play cricket","Arijit"]);    //Gopal 22

// user1.about.apply(user2,["Play real cricket","Jubbin"]);    //Girraj 20


// ___________________________________________________________________


// const user1 = {
//     firstName : 'Gopal',
//     age : 22,
//     about : function(hobby, favSinger){
//         console.log(this.firstName,this.age,hobby, favSinger);   
//     }
// }
// const user2 = {
//     firstName : 'Girraj',
//     age : 20,
// }

// user1.about.apply(user1,["play cricket","Arijit"]);    //Gopal 22

// user1.about.apply(user2,["Play real cricket","Jubbin"]);    //Girraj 20


// ___________________________________________________________________
// function about(hobby, favSinger){
//     console.log(this.firstName,this.age,hobby, favSinger);   
// }
// const user1 = {
//     firstName : 'Gopal',
//     age : 22,
    
// }
// const user2 = {
//     firstName : 'Girraj',
//     age : 20,
// }

// about.apply(user1,["play cricket","Arijit"]);    //Gopal 22
// about.apply(user2,["Play real cricket","Jubbin"]);    //Girraj 20



// ___________________________________________________________________
// bind() : 
// Bind is a function that helps you create another function that you can execute later with the new context of this that is provided.
// The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// ___________________________________________________________________

// const user1 = {
//     firstName : 'Gopal',
//     age : 22,
//     about : function(hobby, favSinger){
//         console.log(this.firstName,this.age,hobby, favSinger);   
//     }
// }
// const user2 = {
//     firstName : 'Girraj',
//     age : 20,
// }

// const func = user1.about.bind(user1,"play cricket","Arijit");    //Gopal 22

// const func1 = user1.about.bind(user2,"Play real cricket","Jubbin");    //Girraj 20
// func();
// func1();

// ___________________________________________________________________
// function about(hobby, favSinger){
//     console.log(this.firstName,this.age,hobby, favSinger);   
// }
// const user1 = {
//     firstName : 'Gopal',
//     age : 22,
    
// }
// const user2 = {
//     firstName : 'Girraj',
//     age : 20,
// }

// const func = about.bind(user1,"play cricket","Arijit");    //Gopal 22

// const func1 = about.bind(user2,"Play real cricket","Jubbin");    //Girraj 20
// func();
// func1();


// ___________________________________________________________________


// ___________________________________________________________________








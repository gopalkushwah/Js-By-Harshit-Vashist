// // in js function is also an object 

// function hello(){
//     // console.log("Hello world "+hello.myname);
//     console.log("Hello world ");

// }
// // name is the predifined property
// // console.log(hello.name);

// // hello.myname = "Gopal";
// // console.log(hello.myname);
// // console.log(hello.myname);
// hello();


// function provides us some usefull properties like name 

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object,so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.


// console.log(hello.prototype);
// -----------------------------------------------------------
// only function provides prototype property
function myfun(){
    console.log("Hello world");
}

const obj = {key1 : "value1",key2 : "value2"}
// console.log(myfun);
// console.log(obj);
if(myfun.prototype)
    console.log("Prototype present");
else
    console.log("Prototype not present");


// normal object,array and other objects doesn't have any prototype except function 
if(obj.prototype)
    console.log("Prototype present");
else
    console.log("Prototype not present");

// -----------------------------------------------------------

// function myfun(){
    
// }

// myfun.prototype.key1 = "value1";
// myfun.prototype.key2 = "value2";
// myfun.prototype.func = function(){
//     return "jai javan jai kisan";
// }
// console.log(myfun.prototype);
// console.log(myfun.prototype.func());
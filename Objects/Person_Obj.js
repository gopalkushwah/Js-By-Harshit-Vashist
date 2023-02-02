//how to create an js object 
// usualy const keyword is used create a object 
//object does not follows the indexing
//object store data in the form of key and value pair


// Syntax :
// keyword ObjName = {
//     key : value ,
//     key : value ,
//     key : value 
// }
// or 
// keyword ObjName = new Object();
// ObjName.name = "ram";

// const person = {
//     // name : "Gopal",
//     fName : "Gopal",
//     lName : "kushwah",
//     age : 22,
//     gmail : "gopalkushwah@gmail.com"
// }

// console.log(person.fName);
// console.log(person.lName);

// --------------------------------------------------------------------------------------
// keys always stored by js in the form of string 
// whether we provide number or other type of value it takes key as string type 

// way to write key inside the object : 
        // 1. we can write it without closing in double quatation
        // 2. we can write it with closing of double qoutation

// const person = {
//     "fName" : "Gopal",
//     lName : "kushwah",
//     "age" : 22,
//     "gmail" : "gopalkushwah@gmail.com",
//     10 : "class"
// }

// console.log(person);
// console.log(person.fName);
// console.log(person.lName);
// console.log(person["10"]);

// --------------------------------------------------------------------------------------
//we can add a array inside an object and then we will able to perform the indexing operation on the perticular key where array is stored

// const person = {
//     "fName" : "Gopal",
//     lName : "kushwah",
//     "age" : 22,
//     "gmail" : "gopalkushwah@gmail.com",
//     hobbis : ['dance','singing','playing cricket','reading books']
// }

// console.log(person);
// console.log(person.fName);
// console.log(person.lName);
// console.log(person["10"]);
// console.log(person.hobbis[2]);

// --------------------------------------------------------------------------------------
//we can add a array inside an object and then we will able to perform the indexing operation on the perticular key where array is stored

// const person = {
//         "fName" : "Gopal",
//     lName : "kushwah",
//     "age" : 22,
//     "gmail" : "gopalkushwah@gmail.com",
//     10 : 'class',  //here 10 is by default a string because keys are stored in the form of string
//     hobbis : ['dance','singing','playing cricket','reading books']
// }

// console.log(person);
// console.log(person.fName);
// console.log(person.lName);
// console.log(person["10"]);
// console.log(person.hobbis[2]);


// --------------------------------------------------------------------------------------
//How To add a new key value pair
// const person = {
    //     "fName" : "Gopal",
    //     lName : "kushwah",
    //     "age" : 22,
//     hobbis : ['dance','singing','playing cricket','reading books']
// }


// person.gmail =  "gopalkushwah@gmail.com";

// console.log(person.gmail);
// console.log(person);

// // --------------------------------------------------------------------------------------
// //Notation of adding deleting or manupulaing key value pair in object 

// //there are two types of object notation 
// // 1 -- dot notation(.)
// // 2 -- bracket notation []

// const person = {
//         "fName" : "Gopal",
//         lName : "kushwah",
//         "age" : 22,
//         hobbis : ['dance','singing','playing cricket','reading books']
// }

// //by using dot notation
// console.log(person.hobbis);

// //by using bracket notation []
// console.log(person["hobbis"]);
// console.log(person["hobbis"][2]);
// console.log(person["hobbis"][0]);

// --------------------------------------------------------------------------------------
// Add data by using both notations

// const person = {
//     "fName" : "Gopal",
//     lName : "kushwah",
//     "age" : 22,
//     hobbis : ['dance','singing','playing cricket','reading books']
// }

// //by using dot notation

// person.hobbis.push("writing");
// person.cast = "obc";
// console.log(person.hobbis);
// console.log(person.cast);

//by using bracket notation []

// person["cast"] = "Obc";
// person["hobbis"].push("ridding");
// console.log(person["hobbis"]);
// console.log(person["cast"]);

// --------------------------------------------------------------------------------------

//deferance between dot and bracket

//when we wants to write the name of any key , longer then or equals to two words , and when we need to call the value by the key we cant use dot notation as Example



// const person = {
//     "fName" : "Gopal",
//     lName : "kushwah",
//     "age" : 22,
//     "my hobbis" : ['dance','singing','playing cricket','reading books'],

//     "books collection" : ['harry portar','c ','c++','java']
// }

// // //by using dot notation
// // console.log(person.my hobbis);  // its an error while using dot notation
// console.log(person["my hobbis"]);
// console.log(person["books collection"]);


//if there is a variable which constains any string we have to use this string value as key in object then what we can do

// const key = "email";
// const person = {
//     name : "gopal kushwah",
//     age : 20
// }

// person[key] = "gopalkushwah@gmail.com";
// console.log(person.email);
// console.log(person);   // {name: 'gopal kushwah', age: 20, email: 'gopalkushwah@gmail.com'}

// ------------------------------------------------------------------------------------------

// How to iterate over the Object
    // 1. we can iterate by using for in loop
    // 2. By using Object.keys


const animal ={
    "name" : "tiger",
    "age" : 10,
    "color" : "yellow",
    "teath" : 20
}

// for(let key in animal){
//     console.log(key);   /// it will return only the keys from animal
// }


// for(let key in animal){
//     console.log(animal[key]);   /// it will return only the value
// }


// for(let key in animal){
//     // console.log(key + " : "+animal[key]);   /// it will return key with the value
//     // console.log(key , " : ",animal[key]);   /// it will return key with the value
//     console.log(`${key} : ${animal[key]}`);   /// it will return key with the value
// }

// console.log(Object.keys(animal));  // whole array keys
// console.log(typeof Object.keys(animal));  //object

// const val = Array.isArray(Object.keys(animal));
// console.log(val);

for(let key of Object.keys(animal)){
    console.log(animal[key]);
}










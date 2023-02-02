// const obj1 = {
//     key1 : 'value1',
//     key2 : 'value2',
// }
// const obj2 = {
//     key3 : 'value3',
//     key4 : 'value4',
// }

// console.log(obj2.key3);   //value3

// // we want to access the value of obj1 but it will give us undefined as output 
// console.log(obj2.key1);   //undefined

// --------------------------------------------------------------------------------

// How to access key value pair of one object into another object 

// const obj1 = {
//     key1 : 'value1',
//     key2 : 'value2',
// }

// // we can create an object by using Object.create()   and pass another object into create method 
// const obj2 = Object.create(obj1);

// obj2.key3 = "value3";
// obj2.key2 = "uniqueOfvalue2";
// console.log(obj2.key3);  //value3

// // now we are able to access key value pair of obj1 by using obj2 
// console.log(obj2.key1);   //value
// console.log(obj2.__proto__);   //proto will be obj1 for obj2 


// ________________________________________________________________________

// defference b/w __proto__ / [[Prototype]] and Prototype

// __proto__ / [[Prototype]] both are same but Prototype is defferent from them 

// ________________________________________________________________________


// const myfunctions ={
//     about:function(){
//         console.log(`${this.firsName} is ${this.age} years old`);

//     },
//     is18 :function(){
//         return this.age>=18;
//     },
//     emailIs : function(){
//         console.log(`Email is ${this.email}`);
//     }
// }

// function createUser (firsName,lastName,email,age,address){
//     const user = Object.create(myfunctions);
//     user.firsName = firsName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age ;
//     user.address = address ;
    
//     return user;
// }


// const user1 = createUser("Gopal","Kushwah","gopalkushwah@gmail.com",22,"sonagiri Bhopal");
// const user2 = createUser("Girraj","Kushwah","Girrajkushwah@gmail.com",20,"sonagiri Bhopal");
// console.log(user1.__proto__);
// // console.log(user1.is18());
// // console.log(user1.emailIs());

// console.log(user2.__proto__);
// console.log(user2.emailIs());







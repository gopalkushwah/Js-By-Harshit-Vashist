// new keyword
// Constructor function

function data(firsName,age){
    this.firsName = firsName;
    this.age = age;
}
data.prototype.about = function(){
    console.log(this.firsName,this.age);
}
const user = new data("Gopal",22);

// new keyword is creating an ampty Object and setting the value of reference of object to this


console.log(user);
console.log(user.firsName);
console.log(user.age);
user.about();

console.log("------------------------------------------------------------------------------");

// -------------------------------------------------------------
// Constructor function
// function CreateUser (firsName,lastName,email,age,address){
//     this.firsName = firsName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age ;
//     this.address = address ;
// }

// CreateUser.prototype.about = function(){
//     console.log(`${this.firsName} is ${this.age} years old`);
// };

// CreateUser.prototype.is18 = function(){
//     return this.age>=18;
// };


// CreateUser.prototype.emailIs = function(){
//     console.log(`Email is ${this.email}`);
// };


// const user1 = new CreateUser("Gopal","Kushwah","gopalkushwah@gmail.com",22,"sonagiri Bhopal");
// const user2 = new CreateUser("Girraj","Kushwah","Girrajkushwah@gmail.com",20,"sonagiri Bhopal");
// // console.log(user1.__proto__);
// // console.log(user1.is18());
// // console.log(user1.emailIs());

// // console.log(user2.__proto__);
// console.log(user2.prototype);
// user2.emailIs();

// ------------------------------------------------------------
function CreateUser (firsName,lastName,email,age,address){
    this.firsName = firsName;
    this.lastName = lastName;
    this.email = email;
    this.age = age ;
    this.address = address ;
}

CreateUser.prototype.about = function(){
    console.log(`${this.firsName} is ${this.age} years old`);
};

CreateUser.prototype.is18 = function(){
    return this.age>=18;
};


CreateUser.prototype.emailIs = function(){
    console.log(`Email is ${this.email}`);
};


const user1 = new CreateUser("Gopal","Kushwah","gopalkushwah@gmail.com",22,"sonagiri Bhopal");
const user2 = new CreateUser("Girraj","Kushwah","Girrajkushwah@gmail.com",20,"sonagiri Bhopal");

// it will return all the key of user1 including proto keys 
// for(let key in user1){
//     console.log(key);
// }

// if we want to print the keys which is inside of any object we can do this 
for(let key in user1){
    if(user1.hasOwnProperty(key))
        console.log(key);
}
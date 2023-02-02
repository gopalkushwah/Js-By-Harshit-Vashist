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

function createUser (firsName,lastName,email,age,address){
    const user = Object.create(createUser.prototype);
    user.firsName = firsName;
    user.lastName = lastName;
    user.email = email;
    user.age = age ;
    user.address = address ;
    
    return user;
}

createUser.prototype.about = function(){
    console.log(`${this.firsName} is ${this.age} years old`);
};

createUser.prototype.is18 = function(){
    return this.age>=18;
};


createUser.prototype.emailIs = function(){
    console.log(`Email is ${this.email}`);
};


const user1 = createUser("Gopal","Kushwah","gopalkushwah@gmail.com",22,"sonagiri Bhopal");
const user2 = createUser("Girraj","Kushwah","Girrajkushwah@gmail.com",20,"sonagiri Bhopal");
// console.log(user1.__proto__);
// console.log(user1.is18());
// console.log(user1.emailIs());

console.log(user2.__proto__);
console.log(user2.emailIs());


// only single user as we are always creating

// permanet object
// const user = {
//     firsName : "Gopal",
//     lastName : "Kushwah",
//     email : "gopalkushwah@gmail.com",
//     age : 22,
//     address : "222-B sonagiri, Bhopal",
//     about : function(){
//         console.log(`${this.firsName} is ${this.age} years old`);
//     },
    // is18 : function(){
    //     return this.age>=18;
    // }
// }

// user.about();


// ____________________________________________________________________
// Dynamic object 

// create a function (that function create object )
// 2. add key value pair 
// 3. object ko return krega 


//in this process there is a problem
// the about and is18 function will be created for all the object that is very memory consuming

// function createUser (firsName,lastName,email,age,address){
//     const user = {};
//     user.firsName = firsName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age ;
//     user.address = address ;
//     user.about = function(){
//         console.log(`${this.firsName} is ${this.age} years old`);

//     };
//     user.is18 =function(){
//         return this.age>=18;
//     };
//     return user;
// }


// const user1 = createUser("Gopal","Kushwah","gopalkushwah@gmail.com",22,"sonagiri Bhopal");
// console.log(user1);
// console.log(user1.firsName);
// console.log(user1.lastName);
// console.log(user1.is18());

// const user2 = createUser("Girraj","Kushwah","Girrajkushwah@gmail.com",20,"sonagiri Bhopal");
// console.log(user2);
// console.log(user2.firsName);
// console.log(user2.lastName);
// console.log(user2.is18());


// ------------------------------------------------------------------------
//we can create a new object for about and is18 method
//it will create a single-single memory for each function

// const myfunctions ={
//     about:function(){
//         console.log(`${this.firsName} is ${this.age} years old`);

//     },
//     is18 :function(){
//         return this.age>=18;
//     },
// }

// function createUser (firsName,lastName,email,age,address){
//     const user = {};
//     user.firsName = firsName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age ;
//     user.address = address ;
//     user.about = myfunctions.about;
//     user.is18 = myfunctions.is18;
//     return user;
// }


// const user1 = createUser("Gopal","Kushwah","gopalkushwah@gmail.com",22,"sonagiri Bhopal");
// console.log(user1);
// console.log(user1.is18());

// const user2 = createUser("Girraj","Kushwah","Girrajkushwah@gmail.com",20,"sonagiri Bhopal");
// console.log(user2);
// console.log(user2.is18());


const myfunctions ={
    about:function(){
        console.log(`${this.firsName} is ${this.age} years old`);

    },
    is18 :function(){
        return this.age>=18;
    },
}

function createUser (firsName,lastName,email,age,address){
    const user = {
        firsName :firsName,
        lastName : lastName,
        email : email,
        age : age ,
        address : address ,
        about : myfunctions.about,
        is18 : myfunctions.is18,
    };
    
    return user;
}


const user1 = createUser("Gopal","Kushwah","gopalkushwah@gmail.com",22,"sonagiri Bhopal");
console.log(user1);
console.log(user1.is18());

const user2 = createUser("Gi","Kushwah","Girrajkushwah@gmail.com",20,"sonagiri Bhopal");
console.log(user2);
console.log(user2.is18());








